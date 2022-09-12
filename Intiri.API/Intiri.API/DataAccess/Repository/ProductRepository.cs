using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Product;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ProductRepository: RepositoryBase<Product>, IProductRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProductRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		public async Task<IEnumerable<Product>> GetAllProductsAsync()
		{
			return await _context.Products.ToListAsync();
		}

		
	}
}
