using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IColorPalleteRepository : IRepositoryBase<ColorPallete>
	{
		Task<IEnumerable<ColorPallete>> GetColorPalletesAsync();
		Task<ColorPallete> GetColorPalleteById(int id);
		Task<IEnumerable<ColorPallete>> GetColorPalletesByIdsListAsync(ICollection<int> cpIds);
	}
}
