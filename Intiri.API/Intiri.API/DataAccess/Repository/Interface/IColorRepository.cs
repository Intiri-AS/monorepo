using Intiri.API.Models.IntiriColor;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IColorRepository : IRepositoryBase<Color>
	{
		Task<IEnumerable<Color>> GetAllColorsAsync();
		Task<bool> IsColorByHexValueExistAsync(string hexValue);
		Task<Color> GetColorByHexValueAsync(string hexValue);
	}
}
