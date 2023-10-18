using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
    [Authorize]
    public class RoomDetailsController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;
        private readonly ICloudinaryService _fileUploadService;

        #endregion Fields

        #region Constructors

        public RoomDetailsController(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            ICloudinaryService fileUploadService
        )
            : base(unitOfWork)
        {
            _mapper = mapper;
            _fileUploadService = fileUploadService;
        }

        #endregion Constructors

        #region Public methods

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomDetailsOutDTO>>> GetRoomDetails()
        {
            IEnumerable<RoomDetails> roomDetails =
                await _unitOfWork.RoomDetailsRepository.GetRoomDetails();
            IEnumerable<RoomDetailsOutDTO> roomDetailsOut = _mapper.Map<
                IEnumerable<RoomDetailsOutDTO>
            >(roomDetails);

            return Ok(roomDetailsOut);
        }

        [HttpGet("id/{roomDetailsId}")]
        public async Task<ActionResult<RoomDetailsOutDTO>> GetRoomDetailsById(int roomDetailsId)
        {
            RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.GetByID(
                roomDetailsId
            );
            RoomDetailsOutDTO roomDetailsOut = _mapper.Map<RoomDetailsOutDTO>(roomDetails);

            return Ok(roomDetailsOut);
        }

        [HttpPost("add")]
        public async Task<ActionResult<RoomDetailsOutDTO>> AddRoomDetails(
            [FromBody] RoomDetailsInDTO roomDetailsIn
        )
        {
            RoomDetails roomDetails = _mapper.Map<RoomDetails>(roomDetailsIn);

            IFormFile roomSketchFile = roomDetailsIn.RoomSketchFile;
            if (roomSketchFile != null && roomSketchFile.Length > 0)
            {
                ImageUploadResult uploadResult = null;
                try
                {
                    uploadResult = await _fileUploadService.UploadFileAsync(
                        roomSketchFile,
                        FileUploadDestinations.MoodboardRoomSketches
                    );
                }
                catch (Exception ex)
                {
                    return BadRequest($"Failed to upload sketch: {ex.Message}");
                }

                if (uploadResult.Error != null)
                {
                    return BadRequest($"Failed to upload sketch: {uploadResult.Error.Message}");
                }

                roomDetails.SketchUrl = uploadResult.SecureUrl.AbsoluteUri;
                roomDetails.SketchPublicId = uploadResult.PublicId;
            }

            _unitOfWork.RoomDetailsRepository.Insert(roomDetails);

            if (await _unitOfWork.SaveChanges())
            {
                return Ok(_mapper.Map<RoomDetailsOutDTO>(roomDetails));
            }

            return BadRequest("Problem occured while adding room details");
        }

        [HttpDelete("delete/{roomDetailsId}")]
        public async Task<IActionResult> DeleteRoomDetails(int roomDetailsId)
        {
            RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.GetByID(
                roomDetailsId
            );

            if (roomDetails == null)
            {
                return BadRequest($"Room details with Id={roomDetailsId} not found");
            }

            if (roomDetails.SketchPublicId != null)
            {
                var result = await _fileUploadService.DeleteFileAsync(roomDetails.SketchPublicId);
                if (result.Error != null)
                    return BadRequest(result.Error.Message);
            }

            await _unitOfWork.RoomDetailsRepository.Delete(roomDetailsId);

            if (await _unitOfWork.SaveChanges())
            {
                return Ok();
            }

            return BadRequest("Problem occured while deleting room details");
        }

        #endregion Public methods
    }
}
