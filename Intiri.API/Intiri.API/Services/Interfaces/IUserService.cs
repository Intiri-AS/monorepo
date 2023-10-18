using Intiri.API.Models;

namespace Intiri.API.Services.Interfaces
{
    public interface IUserService
    {
        Task<List<string>> DeleteUserRelatedMessagesAsync(int userId);
        List<string> GetEndUserCloudinaryFilesAsync(EndUser endUser);
        Task CleanUserCloudinaryFilesAsync(List<string> cloudinaryFiles);
        List<string> GetPartnerCloudinaryFilesAsync(Partner partner);
    }
}
