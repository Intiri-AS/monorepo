using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Material;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Stripe;
using System.Net;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
    public class RoomsController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;
        private readonly IFileUploudService _fileUploadService;

        #endregion Fields

        #region Constructors

        public RoomsController(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IFileUploudService fileUploadService
        )
            : base(unitOfWork)
        {
            _mapper = mapper;
            _fileUploadService = fileUploadService;
        }

        #endregion Constructors

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomOutDTO>>> GetRooms()
        {
            IEnumerable<Room> rooms = await _unitOfWork.RoomRepository.GetAllRoomsAsync();
            IEnumerable<RoomOutDTO> roomsToReturn = _mapper.Map<IEnumerable<RoomOutDTO>>(rooms);

            return Ok(roomsToReturn);
        }

        [HttpGet("id/{roomId}")]
        public async Task<ActionResult<RoomOutDTO>> GetRoomById(int roomId)
        {
            Room room = await _unitOfWork.RoomRepository.GetByID(roomId);

            if (room == null)
            {
                return BadRequest("Room doesn't exist");
            }

            return _mapper.Map<RoomOutDTO>(room);
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPost("add")]
        public async Task<ActionResult<RoomOutDTO>> AddRoom([FromForm] RoomInDTO roomInDTO)
        {
            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(
                roomInDTO.RoomTypeId
            );

            if (roomType == null)
                return BadRequest("Room type doesn't exist");

            if (roomType.Rooms.Any(r => r.Name == roomInDTO.Name))
            {
                return BadRequest("Room name with room type already exist");
            }

            if (roomType.Rooms.Any(r => r.NameNorwegian == roomInDTO.NameNorwegian))
            {
                return BadRequest("Room name norwegian with room type already exist");
            }

            Room room = _mapper.Map<Room>(roomInDTO);

            IFormFile imageFile = roomInDTO.ImageFile;
            if (imageFile != null && imageFile.Length > 0)
            {
                Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                    await _fileUploadService.TryAddFileToCloudinaryAsync(
                        imageFile,
                        FileUploadDestinations.RoomImages
                    );

                if (uploadResult.Item1 != HttpStatusCode.OK)
                {
                    return BadRequest(uploadResult.Item2);
                }

                room.IconPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                room.IconPublicId = uploadResult.Item3.PublicId;

                room.RoomType = roomType;

                _unitOfWork.RoomRepository.Insert(room);

                if (await _unitOfWork.SaveChanges())
                {
                    return _mapper.Map<RoomOutDTO>(room);
                }
            }

            return BadRequest("Problem adding room");
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPatch("update/{roomId}")]
        public async Task<ActionResult<RoomOutDTO>> UpdateRoom(
            int roomId,
            [FromForm] RoomInDTO roomInDTO
        )
        {
            Room room = await _unitOfWork.RoomRepository.GetByID(roomId);
            if (room == null)
                return BadRequest("Room doesn't exist");

            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(
                roomInDTO.RoomTypeId
            );
            if (roomType == null)
                return BadRequest("Room type doesn't exist");

            _mapper.Map(roomInDTO, room);

            IFormFile imageFileFile = roomInDTO.ImageFile;
            if (imageFileFile != null && imageFileFile.Length > 0)
            {
                Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                    await _fileUploadService.TryAddFileToCloudinaryAsync(
                        imageFileFile,
                        FileUploadDestinations.RoomImages,
                        room.IconPublicId
                    );

                if (uploadResult.Item1 != HttpStatusCode.OK)
                {
                    return BadRequest(uploadResult.Item2);
                }

                room.IconPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                room.IconPublicId = uploadResult.Item3.PublicId;
            }

            room.RoomType = roomType;

            _unitOfWork.RoomRepository.Update(room);

            if (await _unitOfWork.SaveChanges())
            {
                return Ok(_mapper.Map<RoomOutDTO>(room));
                ;
            }

            return BadRequest("Faild to update room.");
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpDelete("delete/{roomId}")]
        public async Task<IActionResult> DeleteRoom(int roomId)
        {
            Room room = await _unitOfWork.RoomRepository.GetRoomByIdWithStyleImagesAsync(roomId);
            if (room == null)
                return BadRequest("Room is not found.");

            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(
                room.RoomTypeId
            );
            if (roomType == null)
                return BadRequest("Room type is not found.");

            try
            {
                roomType.Rooms.Remove(room);
                await _unitOfWork.RoomRepository.Delete(roomId);

                await _unitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest($"Internal error: {ex}");
            }

            if (!string.IsNullOrEmpty(room.IconPublicId))
            {
                Tuple<HttpStatusCode, string> tuple =
                    await _fileUploadService.TryDeleteFileFromCloudinaryAsync(room.IconPublicId);

                if (tuple.Item1 != HttpStatusCode.OK)
                    return Problem(
                        title: "Room is deleted. Faild delete room image.",
                        statusCode: (int?)tuple.Item1,
                        detail: tuple.Item2
                    );
            }

            return Ok();
        }
    }
}
