using Intiri.API.Services.Interfaces;
using System.Net.Http.Headers;

namespace Intiri.API.Services
{
	public class ImageService : IImageService
	{
		#region Fields

		private readonly IWebHostEnvironment _webHostEnvironment;

		#endregion Fields

		#region Constructor

		public ImageService( IWebHostEnvironment webHostEnvironment)
		{
			_webHostEnvironment = webHostEnvironment;
		}

		#endregion Constructor

		public async Task<string> AddImageAsync(IFormFile file, string targetFolder, string imagePrefix= "")
		{
			string folderName = Path.Combine("Resources", targetFolder);
			string pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

			string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
			string fullPath = Path.Combine(pathToSave, imagePrefix + fileName);
			string dbPath = Path.Combine(folderName, imagePrefix + fileName);

			using (var stream = new FileStream(fullPath, FileMode.Create))
			{
				await file.CopyToAsync(stream);
			}

			return dbPath;
		}

		public async Task DeleteImageFromFileSystemAsync(string imgPath)
		{
			string contentRootPath = _webHostEnvironment.ContentRootPath;
			string fullPath = Path.Combine(contentRootPath, imgPath);

			using (var stream = new FileStream(fullPath, FileMode.Open, FileAccess.Read, FileShare.None, 1, FileOptions.DeleteOnClose | FileOptions.Asynchronous))
			{
				await stream.FlushAsync();
			}
		}
	}
}
