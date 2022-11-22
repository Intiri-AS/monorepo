using Intiri.API.Models;

namespace Intiri.API.Services.Interfaces
{
	public interface IUserService
	{
		Task<bool> DeleteUserRelatedMessagesAsync(int userId);
		List<string> GetEndUserCloudinaryFilesAsync(EndUser endUser);
		Task CleanUserCloudinaryFilesAsync(List<string> cloudinaryFiles);
		List<string> GetPartnerCloudinaryFilesAsync(Partner partner);
	}
}
