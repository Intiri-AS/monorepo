using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Services.Interfaces
{
	public interface IVippsLoginService
	{
		public Task<string> GetAuthorizationUrl();
		public Task<TokenResponse> GetAccessToken(string authorizationCode, string redirectUri);
		public Task<UserInfoResponse> GetUserInfo(string accessToken);
	}
}
