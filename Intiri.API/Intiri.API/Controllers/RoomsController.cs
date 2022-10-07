using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class RoomsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors

		public RoomsController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploadService fileUploadService) : base(unitOfWork)
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

		[HttpPost("add")]
		public async Task<ActionResult<RoomOutDTO>> AddRoom([FromForm] RoomInDTO roomInDTO)
		{
			RoomType roomType = await _unitOfWork
				.RoomTypeRepository.GetRoomTypeRoomsByIdAsync(roomInDTO.RoomTypeId);
			
			if (roomType == null) return BadRequest("Room type doesn't exist");

			if (roomType.Rooms.Any(r => r.Name == roomInDTO.Name))
			{
				return BadRequest("Room name with room type already exist");
			}

			IFormFile file = roomInDTO.ImageFile;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService
						.UploadFileAsync(file, FileUploadDestinations.RoomImages);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload room image.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest("Failed to upload room image.");
				}

				Room room = _mapper.Map<Room>(roomInDTO);

				room.IconPath = uploadResult.SecureUrl.AbsoluteUri;
				room.IconPublicId = uploadResult.PublicId;

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
				string iconPath = room.IconPath;

				DeletionResult deletionResult = await _fileUploadService
					.DeleteFileAsync(room.IconPublicId);

				if (deletionResult.Error != null)
				{
					return BadRequest("Unable to delete room image.");
				}

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
