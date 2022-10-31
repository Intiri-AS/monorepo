using CloudinaryDotNet.Actions;
using Intiri.API.Models.Room;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using System.Net;
using System.Net.Http.Headers;

namespace Intiri.API.Services
{
	public class FileUploudService : IFileUploudService
	{
		#region Fields

		private readonly ICloudinaryService _cloudinaryUploadService;

		#endregion Fields

		#region Constructor

		public FileUploudService(ICloudinaryService cloudinaryUploadService)
		{
			_cloudinaryUploadService = cloudinaryUploadService;
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

	}
}
