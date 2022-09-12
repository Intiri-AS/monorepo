using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProductRepository : IRepositoryBase<Product>
	{
		Task<IEnumerable<Product>> GetAllProductsAsync();
	}
}
