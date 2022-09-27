namespace Intiri.API.Services.Interfaces
{
	public interface IVippsLoginService
	{
		public Task GetDiscoveryDocument();
		public Task<string> GetRedirectUrl();
	}
}
