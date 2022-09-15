using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class RoomDetailsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public RoomDetailsController(IUnitOfWork unitOfWork, IMapper mapper): base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<RoomDetailsOutDTO>>> GetRoomDetails()
		{
			IEnumerable<RoomDetails> roomDetails = await _unitOfWork.RoomDetailsRepository.GetRoomDetails();
			IEnumerable<RoomDetailsOutDTO> roomDetailsOut = _mapper.Map<IEnumerable<RoomDetailsOutDTO>>(roomDetails);

			return Ok(roomDetailsOut);
		}

		[HttpGet("id/{roomDetailsId}")]
		public async Task<ActionResult<RoomDetailsOutDTO>> GetRoomDetailsById(int roomDetailsId)
		{
			RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.GetByID(roomDetailsId);
			RoomDetailsOutDTO roomDetailsOut = _mapper.Map<RoomDetailsOutDTO>(roomDetails);

			return Ok(roomDetailsOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<RoomDetailsOutDTO>> AddRoomDetails([FromBody] RoomDetailsInDTO roomDetailsIn)
		{
			RoomDetails roomDetails = _mapper.Map<RoomDetails>(roomDetailsIn);

			if (await _unitOfWork.RoomDetailsRepository.DoesAnyExist(rd => rd.ProjectId == roomDetailsIn.ProjectId))
			{
				return BadRequest($"Room details already exist for project with id={roomDetailsIn.ProjectId}");
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
			RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.GetByID(roomDetailsId);

			if (roomDetails == null)
			{
				return BadRequest($"Room details with Id={roomDetailsId} not found");
			}

			await _unitOfWork.RoomDetailsRepository.Delete(roomDetailsId);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok($"Succesfully deleted room details with Id={roomDetailsId}");
			}

			return BadRequest("Problem occured while deleting room details");
		}

		#endregion Public methods
	}
}
