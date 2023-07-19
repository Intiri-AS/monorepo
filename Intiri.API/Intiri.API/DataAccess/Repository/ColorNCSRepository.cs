using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.IntiriColor;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
    public class ColorNCSRepository : RepositoryBase<ColorNCS>, IColorNCSRepository
    {
        #region Fields

        #endregion Fields

        #region Constructors

        public ColorNCSRepository(DataContext context) : base(context)
        {
        }

        #endregion Constructors

        public async Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsync()
        {
            return await _context.ColorNCS.ToListAsync();
        }

        public async Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsNoTrackingAsync()
        {
            return await _context.ColorNCS.AsNoTracking().ToListAsync();
        }
    }
}
