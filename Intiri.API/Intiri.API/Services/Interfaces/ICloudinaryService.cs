using CloudinaryDotNet.Actions;

namespace Intiri.API.Services.Interfaces;

public interface ICloudinaryService
{
    Task<ImageUploadResult> UploadFileAsync(IFormFile file, string folderName = null);

    Task<DeletionResult> DeleteFileAsync(string publicId);

    Task<bool> TryCreateFolder(string name);

    Task DeleteFolder(string name);

    Task<bool> DoesFolderExist(string name);
}
