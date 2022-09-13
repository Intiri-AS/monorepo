using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IColorPalleteRepository : IRepositoryBase<ColorPallete>
	{
		Task<IEnumerable<ColorPallete>> GetColorPalletesAsync();
	}
}
