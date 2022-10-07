using Intiri.API.Models.IntiriColor;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IColorPaletteRepository : IRepositoryBase<ColorPalette>
	{
		Task<IEnumerable<ColorPalette>> GetColorPalettesAsync();
		Task<ColorPalette> GetColorPaletteById(int id);
		Task<IEnumerable<ColorPalette>> GetColorPalettesByIdsListAsync(ICollection<int> cpIds);
	}
}
