using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Style;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IStyleRepository : IRepositoryBase<Style>
	{
		Task<IEnumerable<Style>> GetStylesAsync();
		Task<Style> GetStyleByIdAsync(int styleId);
		Task<Style> GetStyleByNameAsync(string styleName);
		Task<bool> IsStyleByNameExistAsync(string styleName);
	}
}
