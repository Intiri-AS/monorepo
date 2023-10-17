using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Services.Interfaces
{
    public interface IVippsLoginService
    {
        public Task<string> GetAuthorizationUrlAsync(string redirectUri, string state);
        public Task<TokenResponse> GetAccessTokenAsync(
            string authorizationCode,
            string redirectUri
        );
        public Task<UserInfoResponse> GetUserInfoAsync(string accessToken);
    }
}
