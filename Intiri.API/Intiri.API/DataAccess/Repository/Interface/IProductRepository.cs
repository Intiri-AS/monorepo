using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IProductRepository : IRepositoryBase<Product>
	{
		Task<IEnumerable<Product>> GetProductsAsync();
		Task<Product> GetProductByIdAsync(int productId);
		Task<Product> GetProductByName(string productName);
		Task<IEnumerable<Product>> GetProductsByIdsListAsync(ICollection<int> productIds);
	}
}
