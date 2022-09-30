﻿using AutoMapper;
using IdentityModel.Client;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
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
		private readonly IVippsLoginService _vippsLoginService;
		private readonly ILogger<AccountController> _logger;

		#endregion  Fields

		#region Constructors

		public AccountController(
			IUnitOfWork unitOfWork,
			ITokenService tokenService,
			IMapper mapper,
			IAccountService accountService,
			IVippsLoginService vippsLoginService,
			ILogger<AccountController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_tokenService = tokenService;
			_accountService = accountService;
			_vippsLoginService = vippsLoginService;
			_logger = logger;
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

			IdentityResult result = await _accountService.CreateUserAsync(user);
			if (!result.Succeeded)
			{
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await _accountService.AddUserToRolesAsync(user, "FreeEndUser");
			if (!roleResult.Succeeded)
			{
				return BadRequest(roleResult.Errors);
			}

			return new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user)
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

			return new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user)
			};
		}

		[HttpDelete("delete-user/{phone}")]
		public async Task<ActionResult> DeleteUser(string phone)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(phone);

			if (user == null)
			{
				return BadRequest("User does not exist in dB");
			}

			IdentityResult identityResult = await _accountService.DeleteUserAsync(user);

			if (!identityResult.Succeeded)
			{
				return BadRequest("Faild to delete user");
			}

			return Ok();
		}

		[HttpPatch("forgot-password")]
		public async Task<ActionResult<LoginOutDTO>> ForgotPassword([FromBody] ForgotPasswordInDTO forgotPasswordInDTO)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(forgotPasswordInDTO.PhoneNumber);

			if (user == null)
			{
				return Unauthorized("Invalid user phone number");
			}

			return new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _accountService.GeneratePasswordResetTokenAsync(user)
			};
		}

		[HttpPost("reset-password")]
		public async Task<ActionResult> ResetPassword(ResetPasswordInDTO resetPasswordInDTO)
		{
			User user = await _accountService.GetUserByPhoneNumberAsync(resetPasswordInDTO.PhoneNumber);
			if (user == null)
			{
				//don't get much information because of security reasons
				return BadRequest("Unable to reset password.");
			}

			var resetPassResult = await _accountService.UserResetPaswordAsync(user, resetPasswordInDTO.Token, resetPasswordInDTO.Password);

			if (!resetPassResult.Succeeded)
			{
				resetPassResult.Errors
					.ToList()
					.ForEach(error => _logger.LogError($"Error code:{error.Code}. Error description:{error.Description}"));
				return BadRequest("Unable to reset password.");
			}

			return Ok();
		}

		[HttpGet("vipps-auth-url")]
		public async Task<ActionResult<string>> GetVippsAuthorizationUrl()
		{
			var authUrl = await _vippsLoginService.GetAuthorizationUrlAsync();

			if (authUrl == null)
			{
				_logger.LogError($"Authorization URL isn't initialized");
			}

			var authOut = new AuthorizationUrlOutDTO
			{
				AuthorizationUrl = authUrl
			};
			return Ok(authOut);
		}

		[HttpPost("vipps-login")]
		public async Task<IActionResult> VippsLogin(AccessTokenRequestDTO dto)
		{
			TokenResponse accessToken = await _vippsLoginService
				.GetAccessTokenAsync(dto.AuthorizationCode, dto.RedirectUri);

			if (accessToken == null)
			{
				_logger.LogError($"Access token isn't initialized");
				return BadRequest();
			}

			if (accessToken.IsError)
			{
				_logger.LogError($"{accessToken.Error}");
				return BadRequest();
			}

			UserInfoResponse userInfoResponse = await _vippsLoginService
				.GetUserInfoAsync(accessToken.AccessToken);

			if (userInfoResponse.IsError)
			{
				_logger.LogError($"{userInfoResponse.Error}");
				return BadRequest();
			}
			return Ok();
		}

	}
}
