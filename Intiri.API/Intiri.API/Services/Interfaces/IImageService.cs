namespace Intiri.API.Services.Interfaces
{
	public interface IImageService
	{
		Task<string> AddImageAsync(IFormFile file, string targetFolder, string imagePrefix = "");
		Task DeleteImageFromFileSystemAsync(string imgPath);
	}
}
