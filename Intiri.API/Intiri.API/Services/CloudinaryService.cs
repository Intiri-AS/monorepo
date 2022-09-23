using CloudinaryDotNet.Actions;
using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace Intiri.API.Services;

public class CloudinaryService : IFileUploadService
{
    private readonly CloudinaryDotNet.Cloudinary _cloudinary;
    private readonly IContentTypesService _contentTypesService;
    private readonly ILogger<CloudinaryService> _logger;

    public CloudinaryService(IOptions<CloudinaryConfiguration> options,
                             IContentTypesService contentTypesService,
                             ILogger<CloudinaryService> logger)
    {
        var cloudinaryAccount = new CloudinaryDotNet.Account(options.Value.CloudName,
                                            options.Value.ApiKey,
                                            options.Value.ApiSecret);
        _cloudinary = new CloudinaryDotNet.Cloudinary(cloudinaryAccount);
        _contentTypesService = contentTypesService;
        _logger = logger;
    }

    public async Task<ImageUploadResult> UploadFileAsync(IFormFile file, string folderName = null)
    {
        if (file.Length <= 0)
        {
            return new ImageUploadResult();
        }
        //limit file length to 5MB
        int lenghtLimit = 5 * 1024 * 1024;
        if (file.Length > lenghtLimit)
        {
            _logger.LogWarning($"Lenght of file {file.FileName} exceeded limit of {lenghtLimit} bytes. It won't be uploaded");
            return new ImageUploadResult()
            {
                Error = new Error()
                {
                    Message = $"Lenght of file exceeded limit of {lenghtLimit} bytes. It won't be uploaded."
                }
            };
        }
        if (!_contentTypesService.IsKnownType(file.ContentType))
        {
            _logger.LogWarning($"Trying to upload file type {file.ContentType}. That is not allowed.");
            return new ImageUploadResult()
            {
                Error = new Error()
                {
                    Message = $"File type {file.ContentType} currently is not allowed."
                }
            };
        }
        using Stream stream = file.OpenReadStream();
        ImageUploadParams parameters = new ImageUploadParams()
        {
            File = new CloudinaryDotNet.FileDescription(file.FileName, stream),
            UseFilename = true,
        };
        if (folderName != null)
        {
            parameters.Folder = folderName;
        }
        return await _cloudinary.UploadAsync(parameters);
    }

    public async Task<DeletionResult> DeleteFileAsync(string publicId)
    {
        return await _cloudinary.DestroyAsync(new DeletionParams(publicId));
    }

    public async Task<bool> TryCreateFolder(string name)
    {
        CreateFolderResult result = await _cloudinary.CreateFolderAsync(name);
        return result.Success;
    }

    public async Task DeleteFolder(string name)
    {
        await _cloudinary.DeleteFolderAsync(name);
    }

    public async Task<bool> DoesFolderExist(string name)
    {
        GetFoldersResult result = await _cloudinary.RootFoldersAsync();
        return result.Folders.Any(folder => folder.Name == name);
    }
}
