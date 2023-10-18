using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
    [Authorize]
    public class RoomTypesController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;

        #endregion Fields

        #region Constructors

        public RoomTypesController(IUnitOfWork unitOfWork, IMapper mapper)
            : base(unitOfWork)
        {
            _mapper = mapper;
        }

        #endregion Constructors

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomTypeOutDTO>>> GetRoomTypes()
        {
            IEnumerable<RoomType> roomTypes =
                await _unitOfWork.RoomTypeRepository.GetAllRoomTypesAsync();
            IEnumerable<RoomTypeOutDTO> roomTypesToReturn = _mapper.Map<
                IEnumerable<RoomTypeOutDTO>
            >(roomTypes);

            return Ok(roomTypesToReturn);
        }

        [HttpGet("id/{roomTypeId}")]
        public async Task<ActionResult<RoomTypeOutDTO>> GetRoomTypeById(int roomTypeId)
        {
            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeByIdAsync(
                roomTypeId
            );
            RoomTypeOutDTO roomTypeOutDTO = _mapper.Map<RoomTypeOutDTO>(roomType);

            return Ok(roomTypeOutDTO);
        }

        [HttpGet("rooms/{roomTypeId}")]
        public async Task<ActionResult<RoomTypeRoomsOutDTO>> GetRoomTypeWithRoomsById(
            int roomTypeId
        )
        {
            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(
                roomTypeId
            );
            RoomTypeRoomsOutDTO roomTypeRoomsOutDTO = _mapper.Map<RoomTypeRoomsOutDTO>(roomType);

            return Ok(roomTypeRoomsOutDTO);
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPost("add")]
        public async Task<ActionResult> AddRoomType(RoomTypeInDTO roomTypeInDTO)
        {
            if (await _unitOfWork.RoomTypeRepository.IsRoomTypeNameExists(roomTypeInDTO.Name))
            {
                return BadRequest("Room type name is taken");
            }

            RoomType roomType = _mapper.Map<RoomType>(roomTypeInDTO);
            _unitOfWork.RoomTypeRepository.Insert(roomType);

            if (!await _unitOfWork.SaveChanges())
            {
                return BadRequest();
            }

            return Ok();
        }

        // TODO: Clear cloudinary file
        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpDelete("delete/{roomTypeId}")]
        public async Task<ActionResult> DeleteRoomType(int roomTypeId)
        {
            RoomType roomType = await _unitOfWork.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(
                roomTypeId
            );

            if (roomType == null)
            {
                return BadRequest("Room type doesn' exist.");
            }

            try
            {
                foreach (Room room in roomType.Rooms)
                {
                    //await _imageService.DeleteImageFromFileSystemAsync(room.ImagePath);
                }

                await _unitOfWork.RoomTypeRepository.Delete(roomType.Id);
                await _unitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest($"Internal error: {ex}");
            }

            return Ok();
        }
    }
}
