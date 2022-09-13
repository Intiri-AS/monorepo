using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProductTypeRepository: IRepositoryBase<ProductType>
	{
		Task<IEnumerable<ProductType>> GetAllProductTypesAsync();
		Task<ProductType> GetProductTypeByIdAsync(int productTypeId);
		Task<bool> IsProductTypeNameExists(string productTypeName);
	}
}
