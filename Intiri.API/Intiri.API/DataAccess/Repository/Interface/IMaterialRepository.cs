using Intiri.API.Models.Material;
using Intiri.API.Models.Room;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMaterialRepository : IRepositoryBase<Material>
	{
		Task<IEnumerable<Material>> GetAllMaterialsAsync();
	}
}
