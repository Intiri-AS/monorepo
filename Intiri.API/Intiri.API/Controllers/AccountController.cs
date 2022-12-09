using AutoMapper;
using IdentityModel.Client;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Partner;
using Intiri.API.Models.DTO.Vipps;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Models.Rating;
using Intiri.API.Models.RoleNames;
using Intiri.API.Models.UserLanguage;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
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
		private readonly IRatingService _ratingService;
		private readonly IUserService _userService;

		#endregion  Fields

		#region Constructors

		public AccountController(
			IUnitOfWork unitOfWork,
			ITokenService tokenService,
			IMapper mapper,
			IAccountService accountService,
			IVippsLoginService vippsLoginService,
			ISmsVerificationService smsVerificationService,
			ILogger<AccountController> logger,
			IRatingService ratingService,
			IUserService userService) : base(unitOfWork)
		{
			_mapper = mapper;
			_tokenService = tokenService;
			_accountService = accountService;
			_vippsLoginService = vippsLoginService;
			_smsVerificationService = smsVerificationService;
			_logger = logger;
			_ratingService = ratingService;
			_userService = userService;
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

			OperationResult<bool> sendOperation = await _smsVerificationService
				.SendSmsVerificationCode(registerIn.CountryCode, registerIn.PhoneNumber);

			if (!sendOperation.Result) return BadRequest(sendOperation.ErrorMessage);

			RegisterOutDTO registerOut = new()
			{
				FirstName = registerIn.FirstName,
				LastName = registerIn.LastName,
				CountryCode = registerIn.CountryCode,
				PhoneNumber = registerIn.PhoneNumber,
			};

			return Ok(registerOut);
		}
		
		[HttpPost("login")]
		public async Task<ActionResult> Login(LoginInDTO loginDto)
		{
			string usernameFullPhone = loginDto.CountryCode + loginDto.PhoneNumber;

			User user = await _accountService.GetUserByUsernameAsync(usernameFullPhone);
			
			if (user == null) return BadRequest("Invalid user phone number");

			OperationResult<bool> sendOperation = await _smsVerificationService
				.SendSmsVerificationCode(loginDto.CountryCode, loginDto.PhoneNumber);

			if (!sendOperation.IsSuccess) return BadRequest(sendOperation.ErrorMessage);

			return Ok();
		}

		[HttpPost("sms-verification-register")]
		public async Task<ActionResult<LoginOutDTO>> SmsVerificationRegister(
			SmsVerificationInDTO verificationDto)
		{
			EndUser eUser = _mapper.Map<EndUser>(verificationDto);

			bool isSuccess = _smsVerificationService.ValidateSmsVerificationCode(
				verificationDto.CountryCode, verificationDto.PhoneNumber, verificationDto.VerificationCode);

			if (!isSuccess) return BadRequest("Invalid SMS verification code.");

			IdentityResult result = await _accountService.CreateUserAsync(eUser);
			if (!result.Succeeded) return BadRequest(result.Errors);

			IdentityResult roleResult = await _accountService.AddUserToRoleAsync(eUser, RoleNames.FreeEndUser);
			if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

			return new LoginOutDTO
			{
				CountryCode = verificationDto.CountryCode,
				PhoneNumber = eUser.PhoneNumber,
				Token = await _tokenService.CreateToken(eUser)
			};
		}

		[HttpPost("sms-verification-login")]
		public async Task<ActionResult<LoginOutDTO>> SmsVerificationLogin(
			SmsVerificationInDTO verificationDto)
		{
			string usernameFullPhone = verificationDto.CountryCode + verificationDto.PhoneNumber;
			User user = await _accountService.GetUserByUsernameAsync(usernameFullPhone);

			if (user == null) return BadRequest("Invalid user phone number");

			bool isSuccess = _smsVerificationService.ValidateSmsVerificationCode(
				verificationDto.CountryCode, verificationDto.PhoneNumber, verificationDto.VerificationCode);

			if (!isSuccess) return BadRequest("Invalid SMS verification code.");

			return Ok(new LoginOutDTO
			{
				CountryCode = user.CountryCode,
				PhoneNumber = user.PhoneNumber,
				Token = await _tokenService.CreateToken(user)
			});
		}

		[HttpPost("resend-sms-verification")]
		public async Task<IActionResult> ResendSmsVerificationCode(
			SmsVerificationResendInDTO inDTO)
		{
			OperationResult<bool> sendOperation = await _smsVerificationService
				.SendSmsVerificationCode(inDTO.CountryCode, inDTO.PhoneNumber);

			if (!sendOperation.IsSuccess) return BadRequest(sendOperation.ErrorMessage);

			return Ok("SMS verification code sent.");
		}

		[HttpPost("vipps-auth-url")]
		public async Task<ActionResult> GetVippsAuthorizationUrl(
			VippsRedirectionUriDTO dto)
		{
			string authUrl = await _vippsLoginService.GetAuthorizationUrlAsync(dto.RedirectUri, dto.State);

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
					.GetUserByUsernameAsync(phoneNumber);

				return Ok(new LoginOutDTO
				{
					CountryCode = existingUser.CountryCode,
					PhoneNumber = existingUser.PhoneNumber,
					Token = await _tokenService.CreateToken(existingUser)
				});
			}

			// Register user if not in DB
			string email = userInfoResponse.Claims.FirstOrDefault(c => c.Type == "email").Value;
			string firstName = userInfoResponse.Claims.FirstOrDefault(c => c.Type == "given_name").Value;
			string lastName = userInfoResponse.Claims.FirstOrDefault(c => c.Type == "family_name").Value;

			//TODO: Find the proper way to separate country code
			string countryCode = "47";
			User newUser = new()
			{
				UserName = phoneNumber,
				FirstName = firstName,
				LastName = lastName,
				CountryCode = countryCode,
				PhoneNumber = phoneNumber.Replace(countryCode, ""),
				Email = email
			};

			IdentityResult result = await
				_accountService.CreateUserAsync(newUser);

			if (!result.Succeeded)
			{
				_logger.LogError($"{result.Errors}");
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await _accountService.AddUserToRoleAsync(newUser, RoleNames.FreeEndUser);

			if (!roleResult.Succeeded)
			{
				_logger.LogError($"{roleResult.Errors}");
				return BadRequest(roleResult.Errors);
			}

			return Ok(new LoginOutDTO
			{
				CountryCode = newUser.CountryCode,
				PhoneNumber = newUser.PhoneNumber,
				Token = await _tokenService.CreateToken(newUser)
			});
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("register/partnerContact")]
		public async Task<ActionResult<RegisterOutDTO>> AddPartnerContact(PartnerContactInDTO registerIn)
		{
			Partner partner = await _unitOfWork.PartnerRepository.GetByID(registerIn.PartnerId);

			if (partner == null) return NotFound("Partner for partner contact not found");

			string phoneNumberFull = registerIn.CountryCode + registerIn.PhoneNumber;

			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumberFull))
			{
				return BadRequest("Phone number is taken");
			}

			PartnerContact pUser = _mapper.Map<PartnerContact>(registerIn);
			pUser.Partner = partner;

			IdentityResult result = await _accountService.CreateUserAsync(pUser);
			if (!result.Succeeded) return BadRequest(result.Errors);

			partner.PartnerContacts.Add(pUser);

			IdentityResult roleResult = await _accountService.AddUserToRoleAsync(pUser, RoleNames.Partner);
			if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

			return Ok(_mapper.Map<PartnerContactOutDTO>(pUser));
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("register/designer")]
		public async Task<ActionResult<RegisterOutDTO>> AddDesigner(DesignerInDTO registerIn)
		{
			string phoneNumberFull = registerIn.CountryCode + registerIn.PhoneNumber;

			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumberFull))
			{
				return BadRequest("Phone number is taken");
			}

			Designer dUser = _mapper.Map<Designer>(registerIn);
			
			if (string.IsNullOrEmpty(dUser.Language))
			{
				dUser.Language = Language.Norway;
			}

			IdentityResult result = await _accountService.CreateUserAsync(dUser);
			if (!result.Succeeded) return BadRequest(result.Errors);

			IdentityResult roleResult = await _accountService.AddUserToRoleAsync(dUser, registerIn.Role);
			if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

			if (!await _ratingService.InitRatingAndSaveDesignerAsync(dUser))
			{
				return BadRequest("Failed to register designer.");
			}

			return Ok(_mapper.Map<RegisterOutDTO>(dUser));
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("delete-user/{id}")]
		public async Task<ActionResult> DeleteUser(int id)
		{
			if (!await _unitOfWork.UserRepository.DoesAnyUserExistWithId(id))
			{
				return BadRequest("User doesn't exist ");
			}

			User user = null;

			IList<string> userRoles = await _accountService.GetUserRolesByIdAsync(id.ToString());
			List<string> cloudinaryPublicIds = null;

			if (userRoles.Contains(RoleNames.Partner))
			{
				user = await _accountService.GetUserByIdAsync<PartnerContact>(id);
			}
			else if (userRoles.Contains(RoleNames.InternalDesigner) || userRoles.Contains(RoleNames.ExternalDesigner))
			{
				user = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(id);

				cloudinaryPublicIds = new List<string>() { user.PublicId };
				cloudinaryPublicIds.AddRange(await _userService.DeleteUserRelatedMessagesAsync(id));

			}
			else if (userRoles.Contains(RoleNames.FreeEndUser))
			{
				user = await _unitOfWork.UserRepository.GetEndUserWithCollectionsAsync(id);

				cloudinaryPublicIds = _userService.GetEndUserCloudinaryFilesAsync(user as EndUser);
				cloudinaryPublicIds.AddRange(await _userService.DeleteUserRelatedMessagesAsync(id));
			}

			try
			{
				IdentityResult identityResult = await _accountService.DeleteUserAsync(user);

				if (!identityResult.Succeeded)
					return BadRequest("Faild to delete user");

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				string message = ex.InnerException != null ? ex.InnerException.Message : ex.Message;
				return BadRequest($"Faild to delete user: {message}");
			}

			// delete all user cloudinary files
			if (cloudinaryPublicIds != null && cloudinaryPublicIds.Count > 0)
			{
				await _userService.CleanUserCloudinaryFilesAsync(cloudinaryPublicIds);
			}

			return Ok();
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("deleteEndUser/{id}")]
		public async Task<ActionResult> DeleteEndUser(int id)
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetEndUserWithCollectionsAsync(id);

			if (endUser == null)
				return BadRequest("End user doesn't exist");

			await _userService.DeleteUserRelatedMessagesAsync(id);
			List<string> cloudinaryPublicIds = _userService.GetEndUserCloudinaryFilesAsync(endUser);

			try
			{
				IdentityResult identityResult = await _accountService.DeleteUserAsync(endUser);
				if (!identityResult.Succeeded)
					return BadRequest("Faild to delete End user");
			}
			catch (Exception ex)
			{
				return BadRequest($"Faild to delete End user: {ex.Message}");
			}

			// delete all user cloudinary files
			if (cloudinaryPublicIds != null && cloudinaryPublicIds.Count > 0)
			{
				await _userService.CleanUserCloudinaryFilesAsync(cloudinaryPublicIds);
			}

			return Ok();
		}
	}
}
