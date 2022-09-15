using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Material;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class MaterialRepository : RepositoryBase<Material>, IMaterialRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public MaterialRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors

		public async Task<IEnumerable<Material>> GetAllMaterialsAsync()
		{
			return await _context.Materials.Include(mt => mt.MaterialType).ToListAsync();
		}

		public async Task<IEnumerable<Material>> GetMaterialsByIdsListAsync(ICollection<int> materialIds)
		{
			return await _context.Materials.Where(m => materialIds.Contains(m.Id)).ToListAsync();
		}
	}
}
