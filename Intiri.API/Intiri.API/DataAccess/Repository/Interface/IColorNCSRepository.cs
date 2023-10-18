using Intiri.API.Models;
using Intiri.API.Models.IntiriColor;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IColorNCSRepository : IRepositoryBase<ColorNCS>
    {
        Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsync();
        Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsNoTrackingAsync();
    }

    public interface IDesignerPortfolioRepository : IRepositoryBase<DesignerPortfolio> { }

    public class DesignerPortfolioRepository
        : RepositoryBase<DesignerPortfolio>,
            IDesignerPortfolioRepository
    {
        public DesignerPortfolioRepository(DataContext context)
            : base(context) { }
    }
}
