using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class RoomsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IImageService _imageService;

		#endregion Fields

		#region Constructors

		public RoomsController(IUnitOfWork unitOfWork, IImageService imageService, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
			_imageService = imageService;
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

		[HttpPost("add")]
		public async Task<ActionResult<RoomOutDTO>> AddRoom([FromForm] RoomInDTO roomInDTO)
		{
			RoomType roomType = await _unitOfWork.RoomTypeRepository.GetByID(roomInDTO.RoomTypeId);

			if (roomType == null)
			{
				return BadRequest("Room type doesn't exist");
			}

			IFormFile file = roomInDTO.ImageFile;

			if (file.Length > 0)
			{
				string dbPath = await _imageService.AddImageAsync(file, "RoomImages");
				Room room = _mapper.Map<Room>(roomInDTO);

				room.ImagePath = dbPath;
				_unitOfWork.RoomRepository.Insert(room);

				if (await _unitOfWork.SaveChanges())
				{
					roomType.Rooms.Add(room);
					return _mapper.Map<RoomOutDTO>(room);
				}
			}

			return BadRequest("Problem adding room");
		}

		[HttpDelete("delete/{roomId}")]
		public async Task<IActionResult> DeleteRoom(int roomId)
		{
			Room room = await _unitOfWork.RoomRepository.GetByID(roomId);
			RoomType roomType = await _unitOfWork.RoomTypeRepository.GetByID(room.RoomTypeId);

			if (room == null)
			{
				return BadRequest("Room is not found.");
			}

			try
			{
				string imagePath = room.ImagePath;
				await _imageService.DeleteImageFromFileSystemAsync(imagePath);

				await _unitOfWork.RoomRepository.Delete(roomId);
				roomType.Rooms.Remove(room);

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
