using AutoMapper;
using IdentityModel.Client;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.Vipps;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class AccountController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ITokenService _tokenService;
		private readonly IAccountService _accountService;
		private readonly IVippsLoginService _vippsLoginService;
		private readonly ISmsVerificationService _smsVerificationService;
		private readonly ILogger<AccountController> _logger;

		#endregion  Fields

		#region Constructors

		public AccountController(
			IUnitOfWork unitOfWork,
			ITokenService tokenService,
			IMapper mapper,
			IAccountService accountService,
			IVippsLoginService vippsLoginService,
			ISmsVerificationService smsVerificationService,
			ILogger<AccountController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_tokenService = tokenService;
			_accountService = accountService;
			_vippsLoginService = vippsLoginService;
			_smsVerificationService = smsVerificationService;
			_logger = logger;
		}

		#endregion Constructors

		[HttpPost("register")]
		public async Task<ActionResult<RegisterOutDTO>> Register(RegisterInDTO registerIn)
		{
			string phoneNumberFull = registerIn.CountryCode + registerIn.PhoneNumber;

			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumberFull))
			{
				return BadRequest("Phone number is taken");
			}

			bool isSent = await _smsVerificationService
				.SendSmsVerificationCode(phoneNumberFull);

			if (!isSent)
			{
				return BadRequest(
					"Failed to send SMS verification code " +
					"during registration process");
			}

			RegisterOutDTO registerOut = new()
			{
				FirstName = registerIn.FirstName,
				LastName = registerIn.LastName,
				PhoneNumberFull = phoneNumberFull
			};
			return Ok(registerOut);
		}

		[HttpPost("login")]
		public async Task<ActionResult> Login(LoginInDTO loginDto)
		{
			string phoneNumberFull = loginDto.CountryCode + loginDto.PhoneNumber;

			User user = await _accountService
				.GetUserByPhoneNumberAsync(phoneNumberFull);
			
			if (user == null)
			{
				return BadRequest("Invalid user phone number");
			}

			bool isSent = await _smsVerificationService
				.SendSmsVerificationCode(phoneNumberFull);

			if (!isSent)
			{
				return BadRequest(
					"Failed to send SMS verification code " +
					"during login process");
			}
			return Ok();
		}

		[HttpPost("sms-verification-register")]
		public async Task<ActionResult<LoginOutDTO>> SmsVerificationRegister(
			SmsVerificationInDTO verificationDto)
		{
			User user = _mapper.Map<User>(verificationDto);
			user.PhoneNumber = verificationDto.PhoneNumberFull;

			bool isSuccess = _smsVerificationService.ValidateSmsVerificationCode(
				verificationDto.PhoneNumberFull, verificationDto.VerificationCode);

			if (!isSuccess)
			{
				return BadRequest("Invalid SMS verification code.");
			}

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

		[HttpPost("sms-verification-login")]
		public async Task<ActionResult<LoginOutDTO>> SmsVerificationLogin(
			SmsVerificationInDTO verificationDto)
		{
			User user = await _accountService
				.GetUserByPhoneNumberAsync(verificationDto.PhoneNumberFull);

			if (user == null)
			{
				return BadRequest("Invalid user phone number");
			}

			bool isSuccess = _smsVerificationService.ValidateSmsVerificationCode(
				verificationDto.PhoneNumberFull, verificationDto.VerificationCode);

			if (!isSuccess)
			{
				return BadRequest("Invalid SMS verification code.");
			}

			return Ok(new LoginOutDTO
			{
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user)
			});
		}

		[HttpPost("resend-sms-verification")]
		public async Task<IActionResult> ResendSmsVerificationCode(
			SmsVerificationResendInDTO verificationResendInDTO)
		{
			string phoneNumberFull = verificationResendInDTO.PhoneNumberFull;

			bool isSent = await _smsVerificationService
				.SendSmsVerificationCode(phoneNumberFull);

			if (isSent)
			{
				return BadRequest("Failed to send SMS verification code.");
			}
			return Ok("SMS verification code sent.");
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

		[HttpPost("vipps-auth-url")]
		public async Task<ActionResult> GetVippsAuthorizationUrl(
			VippsRedirectionUriDTO dto)
		{
			string authUrl = await _vippsLoginService
				.GetAuthorizationUrlAsync(dto.RedirectUri, dto.State);

			if (authUrl == null)
			{
				_logger.LogError(
					$"Fetching Vipps authorization URL failed. " +
					$"Authorization_URL={authUrl}");

				return NotFound(
					"Something went wrong " +
					"while fetching authorization URL from Vipps.");
			}

			return Ok(new VippsAuthorizationUrlDTO() { AuthorizationUrl = authUrl});
		}

		[HttpPost("vipps-login")]
		public async Task<ActionResult<LoginOutDTO>> VippsLogin(
			VippsAccessTokenRequestDTO dto)
		{
			TokenResponse accessToken = await _vippsLoginService
				.GetAccessTokenAsync(dto.AuthorizationCode, dto.RedirectUri);

			if (accessToken == null)
			{
				_logger.LogError(
					$"Fetching access token from Vipps failed. " +
					$"Access_token={accessToken}");

				return NotFound(
					"Something went wrong " +
					"while fetching access token from Vipps.");
			}
			
			if (accessToken.IsError)
			{
				_logger.LogError(
					$"Fetching access token from Vipps failed. " +
					$"Error={accessToken.Error}");

				return BadRequest(
					"Something went wrong " +
					"while fetching access token from Vipps.");
			}

			UserInfoResponse userInfoResponse = await 
				_vippsLoginService.GetUserInfoAsync(accessToken.AccessToken);

			if (userInfoResponse == null)
			{
				_logger.LogError(
					$"Fetching user info from Vipps failed. " +
					$"Access_token={userInfoResponse}");

				return NotFound(
					"Something went wrong " +
					"while fetching user info from Vipps.");
			}

			if (userInfoResponse.IsError)
			{
				_logger.LogError(
					$"Fetching user info from Vipps failed. " +
					$"Error={userInfoResponse.Error}");

				return BadRequest(
					"Something went wrong " +
					"while fetching user info from Vipps.");
			}

			string phoneNumber = userInfoResponse.Claims
				.FirstOrDefault(c => c.Type == "phone_number").Value;

			if (phoneNumber == null)
			{
				_logger.LogError(
					$"Fetching user's phone number from Vipps failed. " +
					$"phone_number={phoneNumber}");

				BadRequest("Something went wrong " +
					"while fetching user's phone number from Vipps.");
			}

			// Login user if already in DB
			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumber))
			{
				User existingUser = await _accountService
					.GetUserByPhoneNumberAsync(phoneNumber);

				return Ok(new LoginOutDTO
				{
					PhoneNumber = existingUser.PhoneNumber,
					Token = await _tokenService.CreateToken(existingUser)
				});
			}

			// Register user if not in DB
			string email = userInfoResponse.Claims
				.FirstOrDefault(c => c.Type == "email").Value;

			string firstName = userInfoResponse.Claims
				.FirstOrDefault(c => c.Type == "given_name").Value;

			string lastName = userInfoResponse.Claims
				.FirstOrDefault(c => c.Type == "family_name").Value;

			User newUser = new()
			{
				UserName = phoneNumber,
				FirstName = firstName,
				LastName = lastName,
				PhoneNumber = phoneNumber,
				Email = email
			};

			IdentityResult result = await
				_accountService.CreateUserAsync(newUser);

			if (!result.Succeeded)
			{
				_logger.LogError($"{result.Errors}");
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await 
				_accountService.AddUserToRolesAsync(newUser, "FreeEndUser");

			if (!roleResult.Succeeded)
			{
				_logger.LogError($"{roleResult.Errors}");
				return BadRequest(roleResult.Errors);
			}

			return Ok(new LoginOutDTO
			{
				PhoneNumber = newUser.PhoneNumber,
				Token = await _tokenService.CreateToken(newUser)
			});
		}
	}
}
