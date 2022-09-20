using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ColorPaletteRepository: RepositoryBase<ColorPalette>, IColorPaletteRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constrouctors

		public ColorPaletteRepository(DataContext context, IMapper mapper): base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		public async Task<IEnumerable<ColorPalette>> GetColorPalettesAsync()
		{
			return await _context.ColorPalettes.ToListAsync();
		}

		public async Task<ColorPalette> GetColorPaletteById(int id)
		{
			return await GetByID(id);
		}

		public async Task<IEnumerable<ColorPalette>> GetColorPalettesByIdsListAsync(ICollection<int> cpIds)
		{
			return await _context.ColorPalettes.Where(cp => cpIds.Contains(cp.Id)).ToListAsync();
		}

		#endregion Public methods
	}
}
