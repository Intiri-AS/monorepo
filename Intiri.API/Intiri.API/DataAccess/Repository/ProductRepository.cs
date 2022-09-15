﻿using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Product;
using Intiri.API.Models.Style;
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

		#region Public methods

		public async Task<IEnumerable<Product>> GetProductsAsync()
		{
			return await _context.Products
				.Include(pt => pt.ProductType)
				.Include(pt => pt.MaterialType)
				.ToListAsync();
		}

		public async Task<Product> GetProductByIdAsync(int productId)
		{
			return await GetByID(productId);
		}

		public async Task<Product> GetProductByName(string productName)
		{
			return await SingleOrDefaultAsync<Product>(product => product.Name == productName, _mapper);
		}

		public async Task<IEnumerable<Product>> GetProductsByIdsListAsync(ICollection<int> productIds)
		{
			return await _context.Products.Where(p => productIds.Contains(p.Id)).ToListAsync();
		}

		#endregion Public methods
	}
}
