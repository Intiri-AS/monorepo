using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ColorPaletteRepository : RepositoryBase<ColorPalette>, IColorPaletteRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constrouctors

		public ColorPaletteRepository(DataContext context, IMapper mapper) : base(context)
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

        public async Task<IEnumerable<ColorPaletteOutDTO>> GetColorPalettesWithNCSAsync()
        {
            return await (from colorPalettes in _context.ColorPalettes.AsNoTracking()
                          join colorNCS_Main in _context.ColorNCS.AsNoTracking() on colorPalettes.MainColor equals colorNCS_Main.Id.ToString()
                          join colorNCS_Light in _context.ColorNCS.AsNoTracking() on colorPalettes.ShadeColorLight equals colorNCS_Light.Id.ToString()
                          join colorNCS_Medium in _context.ColorNCS.AsNoTracking() on colorPalettes.ShadeColorMedium equals colorNCS_Medium.Id.ToString()
                          join colorNCS_Dark in _context.ColorNCS.AsNoTracking() on colorPalettes.ShadeColorDark equals colorNCS_Dark.Id.ToString()
                          select new ColorPaletteOutDTO
                            {
								Id = colorPalettes.Id,
								Name = colorPalettes.Name,
								Number = colorPalettes.Number,
								MainColor = colorPalettes.MainColor,
								ShadeColorLight = colorPalettes.ShadeColorLight,
								ShadeColorMedium = colorPalettes.ShadeColorMedium,
								ShadeColorDark = colorPalettes.ShadeColorDark,
								MainColorData = colorNCS_Main,
								ShadeColorLightData = colorNCS_Light,
								ShadeColorMediumData = colorNCS_Medium,
								ShadeColorDarkData = colorNCS_Dark,
							}).ToListAsync();

        }

        #endregion Public methods
    }
}
