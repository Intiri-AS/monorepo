using Intiri.API.Models.Material;
using Intiri.API.Models.Room;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMaterialTypeRepository : IRepositoryBase<MaterialType>
	{
		Task<IEnumerable<MaterialType>> GetAllMaterialTypesAsync();
		Task<MaterialType> GetMaterialTypeByIdAsync(int materialTypeId);
		Task<MaterialType> GetMaterialTypeMaterialsByIdAsync(int materialTypeId);
		Task<bool> IsMaterialTypeNameExists(string materialTypeName);
	}
}
