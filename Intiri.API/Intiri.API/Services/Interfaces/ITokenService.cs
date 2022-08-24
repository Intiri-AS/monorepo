using Intiri.API.Models;

namespace Intiri.API.Services.Interfaces
{
	public interface ITokenService
	{
		Task<string> CreateToken(User user);
	}
}
