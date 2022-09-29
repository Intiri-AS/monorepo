using IdentityModel.Client;
using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
using Headers = System.Net.Http.Headers;

namespace Intiri.API.Services
{
	public class VippsLoginService: IVippsLoginService
	{
		private readonly IOptions<VippsLoginConfiguration> _options;
		private readonly ILogger<VippsLoginService> _logger;
		private readonly HttpClient _httpClient;
		private DiscoveryDocumentResponse _discoveryDocument;

		public VippsLoginService(
			ILogger<VippsLoginService> logger,
			IOptions<VippsLoginConfiguration> options)
		{
			_logger = logger;
			_options = options;
			_httpClient = new HttpClient();
		}

		private async Task GetDiscoveryDocument()
		{
			DiscoveryDocumentRequest discoRequest = new DiscoveryDocumentRequest
			{
				Address = _options.Value.DiscoveryUrl,
				Policy =
				{
					ValidateEndpoints = false
				}
			};

			DiscoveryDocumentResponse discoResponse =
				await _httpClient.GetDiscoveryDocumentAsync(discoRequest);

			if (discoResponse.IsError)
			{
				_logger.LogError($"{discoResponse.Error}");
				return;
			}

			_discoveryDocument = discoResponse;
		}

		public async Task<string> GetAuthorizationUrl()
		{
			await GetDiscoveryDocument();

			RequestUrl requestUrl = new(_discoveryDocument.AuthorizeEndpoint);

			string authorizationUrl = requestUrl.CreateAuthorizeUrl(
				clientId: _options.Value.ClientId,
				responseType: "code",
				redirectUri: "http://localhost:8100/processing",
				scope: "name email phoneNumber",
				state: "TODO: Session cookie");

			return authorizationUrl;
		}

		public async Task<TokenResponse> 
			GetAccessToken(string authorizationCode, string redirectUri)
		{
			AuthorizationCodeTokenRequest accessTokenRequest =
				CreateAccessTokenRequest(authorizationCode, redirectUri);

			return await _httpClient
				.RequestAuthorizationCodeTokenAsync(accessTokenRequest);
		}

		public async Task<UserInfoResponse> GetUserInfo(string accessToken)
		{
			UserInfoRequest userInfoRequest = CreateUserInfoRequest(accessToken);

			return await _httpClient.GetUserInfoAsync(userInfoRequest);
		}

		private AuthorizationCodeTokenRequest CreateAccessTokenRequest(string authorizationCode, string redirectUri)
		{
			AuthorizationCodeTokenRequest accessTokenRequest = new()
			{
				Address = _discoveryDocument.TokenEndpoint,

				ClientId = _options.Value.ClientId,
				ClientSecret = _options.Value.ClientSecret,

				Code = authorizationCode,
				RedirectUri = redirectUri
			};
			return accessTokenRequest;
		}

		public UserInfoRequest CreateUserInfoRequest(string access_token)
		{
			UserInfoRequest userInfoRequest = new()
			{
				Address = _discoveryDocument.UserInfoEndpoint,
				Token = access_token
			};
			return userInfoRequest;
		}

		private string CreateTokenAuthorizationHeader()
		{
			string authorizationHeader = $"{_options.Value.ClientId}:{_options.Value.ClientSecret}";
			return Convert.ToBase64String(Encoding.UTF8.GetBytes(authorizationHeader));
		}
	}
}
