using IdentityModel.Client;
using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Intiri.API.Services
{
    public class VippsLoginService : IVippsLoginService
    {
        private readonly IOptions<VippsConfiguration> _options;
        private readonly ILogger<VippsLoginService> _logger;
        private readonly HttpClient _httpClient;

        public VippsLoginService(
            ILogger<VippsLoginService> logger,
            IOptions<VippsConfiguration> options
        )
        {
            _logger = logger;
            _options = options;
            _httpClient = new HttpClient();
        }

        public async Task<string> GetAuthorizationUrlAsync(string redirectUri, string state)
        {
            DiscoveryDocumentResponse discoResponse = await GetDiscoveryDocumentAsync();

            if (discoResponse == null)
            {
                return null;
            }

            RequestUrl requestUrl = new(discoResponse.AuthorizeEndpoint);

            string authorizationUrl = requestUrl.CreateAuthorizeUrl(
                clientId: _options.Value.ClientId,
                responseType: "code",
                redirectUri: redirectUri,
                scope: "name email phoneNumber",
                state: state
            );

            return authorizationUrl;
        }

        public async Task<TokenResponse> GetAccessTokenAsync(
            string authorizationCode,
            string redirectUri
        )
        {
            DiscoveryDocumentResponse discoResponse = await GetDiscoveryDocumentAsync();

            if (discoResponse == null)
            {
                return null;
            }

            AuthorizationCodeTokenRequest accessTokenRequest = CreateAccessTokenRequest(
                discoResponse.TokenEndpoint,
                authorizationCode,
                redirectUri
            );

            return await _httpClient.RequestAuthorizationCodeTokenAsync(accessTokenRequest);
        }

        public async Task<UserInfoResponse> GetUserInfoAsync(string accessToken)
        {
            DiscoveryDocumentResponse discoResponse = await GetDiscoveryDocumentAsync();

            if (discoResponse == null)
            {
                return null;
            }

            UserInfoRequest userInfoRequest = CreateUserInfoRequest(
                discoResponse.UserInfoEndpoint,
                accessToken
            );

            return await _httpClient.GetUserInfoAsync(userInfoRequest);
        }

        private async Task<DiscoveryDocumentResponse> GetDiscoveryDocumentAsync()
        {
            DiscoveryDocumentRequest discoRequest = CreateDiscoveryDocumentRequest();

            DiscoveryDocumentResponse discoResponse = await _httpClient.GetDiscoveryDocumentAsync(
                discoRequest
            );

            if (discoResponse.IsError)
            {
                _logger.LogError($"{discoResponse.Error}");
                return null;
            }
            return discoResponse;
        }

        private DiscoveryDocumentRequest CreateDiscoveryDocumentRequest()
        {
            string discoveryEndpoingAddress =
                $"{_options.Value.Authority}/.well-known/openid-configuration";

            DiscoveryDocumentRequest discoRequest =
                new()
                {
                    Address = discoveryEndpoingAddress,
                    Policy = { ValidateEndpoints = false }
                };
            return discoRequest;
        }

        private AuthorizationCodeTokenRequest CreateAccessTokenRequest(
            string tokenEndpointAddress,
            string authorizationCode,
            string redirectUri
        )
        {
            AuthorizationCodeTokenRequest accessTokenRequest =
                new()
                {
                    Address = tokenEndpointAddress,
                    ClientId = _options.Value.ClientId,
                    ClientSecret = _options.Value.ClientSecret,
                    Code = authorizationCode,
                    RedirectUri = redirectUri
                };
            return accessTokenRequest;
        }

        public UserInfoRequest CreateUserInfoRequest(
            string userInfoEndpointAddress,
            string access_token
        )
        {
            UserInfoRequest userInfoRequest =
                new() { Address = userInfoEndpointAddress, Token = access_token };
            return userInfoRequest;
        }
    }
}
