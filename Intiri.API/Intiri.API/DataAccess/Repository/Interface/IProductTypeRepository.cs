using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IProductTypeRepository : IRepositoryBase<ProductType>
    {
        Task<IEnumerable<ProductType>> GetAllProductTypesAsync();
        Task<bool> IsProductTypeNameExists(string productTypeName);
        Task<ProductType> GetProductTypeProductsByIdAsync(int productTypeId);
    }
}
