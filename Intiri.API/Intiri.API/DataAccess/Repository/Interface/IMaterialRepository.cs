using Intiri.API.Models.Material;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMaterialRepository : IRepositoryBase<Material>
	{
		Task<IEnumerable<Material>> GetAllMaterialsAsync();
		Task<IEnumerable<Material>> GetMaterialsByIdsListAsync(ICollection<int> materialIds);
		Task<Material> GetMaterialByIdWithMoodboardsAsync(int materialId);
	}
}
