using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace Intiri.API.Controllers
{
	public class AccountController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ITokenService _tokenService;
		private readonly IAccountService _accountService;

		#endregion  Fields

		#region Constructors

		public AccountController(IUnitOfWork unitOfWork, ITokenService tokenService, IMapper mapper, IAccountService accountService) : base(unitOfWork)
		{
			_mapper = mapper;
			_tokenService = tokenService;
			_accountService = accountService;
		}

		#endregion Constructors

		[HttpPost("register")]
		public async Task<ActionResult<LoginOutDTO>> Register(RegisterDTO registerDto)
		{
			if (await _accountService.IsUserWithPhoneNumberExists(registerDto.PhoneNumber))
			{
				return BadRequest("Phone number is taken");
			}

			User user = _mapper.Map<User>(registerDto);

			user.UserName = registerDto.Username.ToLower();

			IdentityResult result = await _accountService.CreateUserAsync(user, registerDto.Password);
			if (!result.Succeeded)
			{
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await _accountService.AddUserToRolesAsync(user, "EndUser");
			if (!roleResult.Succeeded)
			{
				return BadRequest(result.Errors);
			}

			return new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user),
			};
		}

		[HttpPost("login")]
		public async Task<ActionResult<LoginOutDTO>> Login(LoginInDTO loginDto)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(loginDto.PhoneNumber);
			if (user == null)
			{
				return Unauthorized("Invalid user phone number");
			}

			SignInResult result = await _accountService.CheckUserSignInPaswordAsync(user, loginDto.Password, false);
			if (!result.Succeeded)
			{
				return Unauthorized("Invalid user password");
			}

			return new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user),
			};
		}
	}
}
