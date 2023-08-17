using Intiri.API.Models.IntiriColor;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IColorRepository : IRepositoryBase<Models.IntiriColor.Color>
	{
		Task<IEnumerable<Models.IntiriColor.Color>> GetAllColorsAsync();
		Task<bool> IsColorByHexValueExistAsync(string hexValue);
		Task<Models.IntiriColor.Color> GetColorByHexValueAsync(string hexValue);
	}
}
