using CloudinaryDotNet.Actions;
using Intiri.API.Models.Room;
using System.Net;

namespace Intiri.API.Services.Interfaces
{
	public interface IFileUploudService
	{
		//Task<string> AddImageAsync(IFormFile file, string targetFolder, string imagePrefix = "");
		//Task DeleteImageFromFileSystemAsync(string imgPath);

		Task<Tuple<HttpStatusCode, string>> TryAddSketchFileAsync(RoomDetails roomDetails, IFormFile file, string fileUploadDestinations);
	}
}
