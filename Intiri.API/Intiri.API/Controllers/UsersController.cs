using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class UsersController : BaseApiController
	{

		#region Fields

		private readonly IFileUploadService _fileUploadService;
		private readonly ILogger<UsersController> _logger;
		private readonly IAccountService _accountService;
		private readonly IMapper _mapper;

		#endregion Fields

		#region ctors

		public UsersController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, ILogger<UsersController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_logger = logger;
			_accountService = accountService;
		}

		#endregion ctors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetUsers()
		{
			IEnumerable<User> users = await _unitOfWork.UserRepository.GetUsersAsync();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

			return Ok(usersToReturn);
		}

		[HttpGet("profile")]
		public async Task<ActionResult<UserOutDTO>> GetUserProfile()
		{
			User user = await _unitOfWork.UserRepository.GetUserByIdAsync(User.GetUserId());

			if (user == null)
			{
				return Unauthorized("Invalid user.");
			}

			return _mapper.Map<UserOutDTO>(user);
		}

		[HttpGet("{username}")]
		public async Task<ActionResult<UserOutDTO>> GetUserByUsername(string username)
		{
			User user = await _unitOfWork.UserRepository.GetUserByUserNameAsync(username);

			if (user == null)
			{
				return Unauthorized("Invalid user name.");
			}

			return _mapper.Map<UserOutDTO>(user);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<UserOutDTO>> GetUserById(int id)
		{
			User user = await _unitOfWork.UserRepository.GetUserByIdAsync(id);

			if (user == null)
			{
				return Unauthorized("Invalid user id.");
			}

			return _mapper.Map<UserOutDTO>(user);
		}

		[HttpPost("addPhoto")]
		public async Task<ActionResult<string>> AddPhoto(IFormFile file)
		{
			User user = await _unitOfWork.UserRepository.GetUserByUserNameAsync(User.GetUsername());

			if (user == null)
			{
				return Unauthorized("Invalid user.");
			}

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.UserProfilePhotos);
				}
				catch (Exception ex)
				{
					return BadRequest($"Failed to upload user photo: {ex.Message}");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest($"Failed to upload user photo: {uploadResult.Error.Message}");
				}

				user.PhotoPath = uploadResult.SecureUrl.AbsoluteUri;
				user.PublicId = uploadResult.PublicId;

				_unitOfWork.UserRepository.UpdateUser(user);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(new UserPhotoPathOutDTO() { PhotoPath = user.PhotoPath });
				}
			}

			return BadRequest("Problem adding user photo.");
		}

		[HttpPut("update")]
		public async Task<ActionResult<UserOutDTO>> UpdateUser(UserOutDTO userUpdateDto)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(User.GetUsername());

			_mapper.Map(userUpdateDto, user);
			_unitOfWork.UserRepository.UpdateUser(user);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<UserOutDTO>(user);
			}

			return BadRequest("Failed to update user.");
		}

		#endregion Public methods
	}
}
