using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.IntiriColor;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ColorRepository : RepositoryBase<Models.IntiriColor.Color>, IColorRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public ColorRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors

		public async Task<IEnumerable<Models.IntiriColor.Color>> GetAllColorsAsync()
		{
			return await _context.Colors.ToListAsync();
		}

		public async Task<bool> IsColorByHexValueExistAsync(string hexValue)
		{
			return await DoesAnyExist(color => color.HexValue == hexValue);
		}

		public async Task<Models.IntiriColor.Color> GetColorByHexValueAsync(string hexValue)
		{
			return await SingleOrDefaultAsync(color => color.HexValue == hexValue);
		}
	}
}
