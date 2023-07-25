using Intiri.API.Models.IntiriColor;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IColorNCSRepository : IRepositoryBase<ColorNCS>
    {
        Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsync();
        Task<IEnumerable<ColorNCS>> GetAllColorsNCSAsNoTrackingAsync();
    }
}
