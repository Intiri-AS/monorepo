using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Material;
using Intiri.API.Models.Room;
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
	}
}
