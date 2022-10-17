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

		public UsersController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploadService fileUploadService, ILogger<UsersController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_logger = logger;
			_accountService = accountService;
			_fileUploadService = fileUploadService;
		}

		#endregion ctors

		#region Public methods

		[HttpGet("endUsers")]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllEndUsers()
		{
			IEnumerable<EndUser> users = await _unitOfWork.UserRepository.GetUsersAsync<EndUser>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

			return Ok(usersToReturn);
		}

		[HttpGet("profile")]
		public async Task<ActionResult<UserOutDTO>> GetUserProfile()
		{
			User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

			if (user == null)
			{
				return Unauthorized("Invalid user.");
			}

			return _mapper.Map<UserOutDTO>(user);
		}

		[HttpPost("addPhoto")]
		public async Task<ActionResult<UserPhotoPathOutDTO>> AddPhoto([FromForm] UserPhotoFileInDTO inFile)
		{
			User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

			if (user == null)
			{
				return Unauthorized("Invalid user.");
			}

			IFormFile file = inFile.PhotoPath;

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
				
				if(user.PhotoPath != null)
				{
					DeletionResult deletionResult = null;
					try
					{
						deletionResult = await _fileUploadService
							.DeleteFileAsync(user.PublicId);
					}
					catch (Exception)
					{
						return BadRequest("Failed to delete partner logo.");
					}

					if (deletionResult.Error != null)
					{
						_logger.LogWarning("Faild delete all photo from cloudinary services");
					}
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

		[HttpPut("profile")]  
		public async Task<ActionResult<UserOutDTO>> UpdateUser(UserUpdateInDTO userUpdateDto)
		{
			User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

			if (user == null)
			{
				return Unauthorized("Invalid user.");
			}

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
