using IdentityModel.Client;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class VippsController : BaseApiController
	{
		private readonly IVippsLoginService _vippsLoginService;
		private readonly ILogger<AccountController> _logger;

		public VippsController(
			IUnitOfWork unitOfWork,
			IVippsLoginService vippsLoginService,
			ILogger<AccountController> logger) : base(unitOfWork)
		{
			_vippsLoginService = vippsLoginService;
			_logger = logger;
		}

		[HttpGet("auth-url")]
		public async Task<ActionResult<string>> GetAuthorizationUrl()
		{
			var auth = await _vippsLoginService.GetAuthorizationUrl();
			var authOut = new AuthorizationUrlOutDTO
			{
				AuthorizationUrl = auth
			};
			return Ok(authOut);
		}

		[HttpPost("get-access-token")]
		public async void GetAccessToken(AccessTokenRequestDTO dto)
		{
			HttpClient client = new();

			TokenResponse accessToken = await _vippsLoginService
				.GetAccessToken(dto.AuthorizationCode, dto.RedirectUri);

			if (accessToken.IsError)
			{
				_logger.LogError($"{accessToken.Error}");
				return;
			}

			AuthEndpointResponseInDTO authEndpointResponseContent = await 
				authEndpointResponse.Content
				.ReadFromJsonAsync<AuthEndpointResponseInDTO>();

			HttpRequestMessage userInfoEndpointRequest =
				_vippsLoginService
				.CreateUserInfoRequest(authEndpointResponseContent.AccessToken);

			HttpResponseMessage userInfoEndpointResponse =
				await client.SendAsync(userInfoEndpointRequest);


		}
	}
}
