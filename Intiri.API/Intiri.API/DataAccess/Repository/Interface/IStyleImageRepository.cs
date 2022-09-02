using Intiri.API.Models;
using Intiri.API.Models.Style;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IStyleImageRepository : IRepositoryBase<StyleImage>
	{

		Task<IEnumerable<StyleImage>> GetStyleImagesAsync();
		Task<StyleImage> GetStyleImageByIdAsync(int ImageId);
	}
}
