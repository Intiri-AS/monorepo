using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Product;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ProductTypeRepository: RepositoryBase<ProductType>, IProductTypeRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProductTypeRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		public async Task<IEnumerable<ProductType>> GetAllProductTypesAsync()
		{
			return await _context.ProductTypes.ToListAsync();
		}

		public async Task<bool> IsProductTypeNameExists(string productTypeName)
		{
			return await DoesAnyExist(productType => productType.Name == productTypeName.ToLower());
		}
	}
}
