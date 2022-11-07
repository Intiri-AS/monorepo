using CloudinaryDotNet.Actions;
using Intiri.API.Models;
using Intiri.API.Models.Room;
using System.Net;

namespace Intiri.API.Services.Interfaces
{
	public interface IFileUploudService
	{
		Task<Tuple<HttpStatusCode, string>> TryAddSketchFileAsync(RoomDetails roomDetails, IFormFile file, string fileUploadDestinations);
		Task<Tuple<HttpStatusCode, string>> TryAddPartnerLogoFileAsync(Partner partner, IFormFile file, string fileUploadDestinations);

		Task<Tuple<HttpStatusCode, string, ImageUploadResult>> TryAddFileToCloudinaryAsync(IFormFile file, string fileUploadDestinations, string oldPublicId = null);
		Task<Tuple<HttpStatusCode, string>> TryDeleteFileFromCloudinaryAsync(string oldPublicId);
	}
}
