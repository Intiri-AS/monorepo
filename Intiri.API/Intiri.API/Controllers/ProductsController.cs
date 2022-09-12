using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Product;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class ProductsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IImageService _imageService;

		#endregion Fields

		#region Constructors
		public ProductsController(IUnitOfWork unitOfWork, IImageService imageService, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
			_imageService = imageService;
		}
		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetProducts()
		{
			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetAllProductsAsync();
			IEnumerable<ProductOutDTO> productsOut = _mapper.Map<IEnumerable<ProductOutDTO>>(products);

			return Ok(productsOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<ProductOutDTO>> AddProduct([FromForm] ProductInDTO productInDTO)
		{
			ProductType productType = await _unitOfWork.ProductTypeRepository.GetProductTypeByIdAsync(productInDTO.ProductTypeId);

			if (productType == null) return BadRequest("Product type doesn't exist");

			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetAllProductsAsync();

			if (products.Any(product => (product.Name == productInDTO.Name && productType.Id == productInDTO.ProductTypeId)))
			{
				return BadRequest($"Product name: '{productInDTO.Name}' already exists for product type: {productInDTO.ProductTypeId}");
			}

			IFormFile file = productInDTO.ImageFile;

			if (file.Length > 0)
			{
				string imgPrefixName = productInDTO.Name + productInDTO.ProductTypeId + "_";
				string dbPath = await _imageService.AddImageAsync(file, "ProductImages", imgPrefixName);

				Product product = _mapper.Map<Product>(productInDTO);
				product.ImagePath = dbPath;
				_unitOfWork.ProductRepository.Insert(product);

				if (await _unitOfWork.SaveChanges())
				{
					return _mapper.Map<ProductOutDTO>(product);
				}
			}

			return BadRequest("Probem occured while adding product");
		}

	}
}
