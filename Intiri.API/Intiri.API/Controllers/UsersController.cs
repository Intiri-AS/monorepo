using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class UsersController : BaseApiController
	{

		#region Fields

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

		[HttpPut("update")]
		public async Task<ActionResult<UserOutDTO>> UpdateUser(UserUpdateInDTO userUpdateDto)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(User.GetUsername());

			_mapper.Map(userUpdateDto, user);
			_unitOfWork.UserRepository.UpdateUser(user);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<UserOutDTO>(user);
			}

			return BadRequest("Failed to update user");
		}

		#endregion Public methods
	}
}
