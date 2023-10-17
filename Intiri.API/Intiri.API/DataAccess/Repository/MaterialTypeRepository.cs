using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Material;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
    public class MaterialTypeRepository : RepositoryBase<MaterialType>, IMaterialTypeRepository
    {
        #region Fields

        #endregion Fields

        #region Constructors

        public MaterialTypeRepository(DataContext context)
            : base(context) { }

        #endregion Constructors

        public async Task<IEnumerable<MaterialType>> GetAllMaterialTypesAsync()
        {
            return await _context.MaterialTypes.ToListAsync();
        }

        public async Task<MaterialType> GetMaterialTypeByIdAsync(int materialTypeId)
        {
            return await GetByID(materialTypeId);
        }

        public async Task<MaterialType> GetMaterialTypeMaterialsByIdAsync(int materialTypeId)
        {
            return (
                await Get(
                    materialType => materialType.Id == materialTypeId,
                    includeProperties: "Materials"
                )
            ).SingleOrDefault();
        }

        public async Task<bool> IsMaterialTypeNameExists(string materialTypeName)
        {
            return await DoesAnyExist(mt => mt.Name == materialTypeName.ToLower());
        }
    }
}
