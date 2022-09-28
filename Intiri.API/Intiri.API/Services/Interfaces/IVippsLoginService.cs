namespace Intiri.API.Services.Interfaces
{
	public interface IVippsLoginService
	{
		public Task<string> GetAuthorizationUrl();
		public string GetTokenAuthorizationHeader();
	}
}
