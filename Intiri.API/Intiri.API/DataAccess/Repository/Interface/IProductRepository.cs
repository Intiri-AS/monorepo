using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProductRepository : IRepositoryBase<Product>
	{
		Task<IEnumerable<Product>> GetProductsAsync();
		Task<Product> GetProductByIdAsync(int id);
		Task<Product> GetProductByNameAsync(string productName);
		Task<IEnumerable<Product>> GetProductsByIdsListAsync(ICollection<int> productIds);
	}
}
