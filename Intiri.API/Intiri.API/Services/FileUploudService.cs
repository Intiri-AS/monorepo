using CloudinaryDotNet.Actions;
using Intiri.API.Models;
using Intiri.API.Models.Room;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using System.Net.Http.Headers;

namespace Intiri.API.Services
{
	public class FileUploudService : IFileUploudService
	{
		#region Fields

		private readonly ICloudinaryService _cloudinaryUploadService;
		private readonly ILogger<FileUploudService> _logger;

		#endregion Fields

		#region Constructor

		public FileUploudService(ICloudinaryService cloudinaryUploadService, ILogger<FileUploudService> logger)
		{
			_cloudinaryUploadService = cloudinaryUploadService;
			_logger = logger;
		}

		#endregion Constructor


		public async Task<Tuple<HttpStatusCode, string>> TryAddSketchFileAsync(RoomDetails roomDetails, IFormFile file, string fileUploadDestinations)
		{
			ImageUploadResult uploadResult;
			try
			{
				uploadResult = await _cloudinaryUploadService.UploadFileAsync(file, fileUploadDestinations);
			}
			catch (Exception ex)
			{
				return new Tuple<HttpStatusCode, string>(HttpStatusCode.BadRequest, ex.Message);
			}

			if (uploadResult.Error != null)
			{
				return new Tuple<HttpStatusCode, string>(uploadResult.StatusCode, uploadResult.Error.Message);
			}

			roomDetails.SketchUrl = uploadResult.SecureUrl.AbsoluteUri;
			roomDetails.SketchPublicId = uploadResult.PublicId;

			return new Tuple<HttpStatusCode, string>(HttpStatusCode.OK, "Succeeded");
		}

		public async Task<Tuple<HttpStatusCode, string>> TryAddPartnerLogoFileAsync(Partner partner, IFormFile file, string fileUploadDestinations)
		{
			string oldLogoPublicId = partner.LogoPublicId;

			ImageUploadResult uploadResult;
			try
			{
				uploadResult = await _cloudinaryUploadService.UploadFileAsync(file, fileUploadDestinations);
			}
			catch (Exception ex)
			{
				return new Tuple<HttpStatusCode, string>(HttpStatusCode.BadRequest, ex.Message);
			}

			if (uploadResult.Error != null)
			{
				return new Tuple<HttpStatusCode, string>(uploadResult.StatusCode, uploadResult.Error.Message);
			}

			partner.LogoPath = uploadResult.SecureUrl.AbsoluteUri;
			partner.LogoPublicId = uploadResult.PublicId;

			// delete old logo from cpoudinary
			if (!oldLogoPublicId.IsNullOrEmpty())
			{
				DeletionResult deletionResult = null;
				try
				{
					deletionResult = await _cloudinaryUploadService.DeleteFileAsync(oldLogoPublicId);
				}
				catch (Exception ex)
				{
					_logger.LogWarning($"Failed to delete partner logo: {ex.Message}");
				}

				if (deletionResult.Error != null)
				{
					_logger.LogWarning("Faild delete logo from cloudinary services");
				}
			}

			return new Tuple<HttpStatusCode, string>(HttpStatusCode.OK, "Succeeded");
		}

		public async Task<Tuple<HttpStatusCode, string, ImageUploadResult>> TryAddFileToCloudinaryAsync(IFormFile file, string fileUploadDestinations, string oldPublicId = null)
		{
			ImageUploadResult uploadResult = null;

			try
			{
				uploadResult = await _cloudinaryUploadService.UploadFileAsync(file, fileUploadDestinations);
			}
			catch (Exception ex)
			{
				return new Tuple<HttpStatusCode, string, ImageUploadResult>(HttpStatusCode.BadRequest, ex.Message, uploadResult);
			}

			if (uploadResult.Error != null)
			{
				return new Tuple<HttpStatusCode, string, ImageUploadResult>(uploadResult.StatusCode, uploadResult.Error.Message, uploadResult);
			}

			if (!string.IsNullOrEmpty(oldPublicId))
			{
				await TryDeleteFileFromCloudinaryAsync(oldPublicId);
			}

			return new Tuple<HttpStatusCode, string, ImageUploadResult>(HttpStatusCode.OK, "Succeeded", uploadResult);
		}


		public async Task<Tuple<HttpStatusCode, string>> TryDeleteFileFromCloudinaryAsync(string oldPublicId)
		{
			DeletionResult deletionResult = null;
			try
			{
				deletionResult = await _cloudinaryUploadService.DeleteFileAsync(oldPublicId);
			}
			catch (Exception ex)
			{
				string exc = $"Failed to delete partner logo: {ex.Message}";
				_logger.LogWarning(exc);

				return Tuple.Create(deletionResult.StatusCode, exc);
			}

			if (deletionResult.Error != null)
			{
				string err = $"Faild delete file from cloudinary services: {deletionResult.Error.Message}";
				_logger.LogWarning(err);

				return Tuple.Create(deletionResult.StatusCode, err);
			}

			return Tuple.Create(HttpStatusCode.OK, "Succeeded");
		}

	}
}
