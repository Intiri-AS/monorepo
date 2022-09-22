using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Product;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class ProductsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IImageService _imageService;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors
		public ProductsController(
			IUnitOfWork unitOfWork,
			IImageService imageService,
			IMapper mapper,
			IFileUploadService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_imageService = imageService;
			_fileUploadService = fileUploadService;
		}
		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetProducts()
		{
			IEnumerable<Product> products = await _unitOfWork
				.ProductRepository.GetProductsAsync();

			IEnumerable<ProductOutDTO> productsOut = 
				_mapper.Map<IEnumerable<ProductOutDTO>>(products);

			return Ok(productsOut);
		}

		[HttpGet("id/{productId}")]
		public async Task<ActionResult<ProductOutDTO>> 
			GetProductByProductId(int productId)
		{
			Product product = await _unitOfWork
				.ProductRepository.GetByID(productId);

			if (product == null)
			{
				return BadRequest($"Product with Id={productId} doesn't exist");
			}
			return Ok(_mapper.Map<ProductOutDTO>(product));
		}

		[HttpPost("add")]
		public async Task<ActionResult<ProductOutDTO>> 
			AddProduct([FromForm] ProductInDTO productInDTO)
		{
			ProductType productType = await _unitOfWork
				.ProductTypeRepository
				.GetByID(productInDTO.ProductTypeId);

			if (productType == null)
			{
				return BadRequest("Product type doesn't exist");
			}

			if (productType.Products.Any(p => p.Name == productInDTO.Name))
			{
				return BadRequest(
					$"Product name: '{productInDTO.Name}' already exists" +
					$" for product type: {productInDTO.ProductTypeId}");
			}

			Product product = _mapper.Map<Product>(productInDTO);

			IFormFile file = productInDTO.ImageFile;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService
						.UploadFileAsync(file, FileUploadDestinations.ProductImages);
				}
				catch (Exception)
				{
					return BadRequest(
						"Unable to upload file. Please try again later.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest(
						"Unable to upload file. Please try again later.");
				}
				
				product.ImagePath = uploadResult.SecureUrl.AbsoluteUri;
				product.ImagePublicId = uploadResult.PublicId;
			}

			product.Style = await _unitOfWork
				.StyleRepository.GetByID(productInDTO.StyleId);

			_unitOfWork.ProductRepository.Insert(product);

			if (await _unitOfWork.SaveChanges())
			{
				productType.Products.Add(product);
				return Ok(_mapper.Map<ProductOutDTO>(product));
			}
			return BadRequest("Probem occured while adding product");
		}

		[HttpDelete("delete/{productId}")]
		public async Task<IActionResult> DeleteProduct(int productId)
		{
			Product product = await _unitOfWork
				.ProductRepository.GetByID(productId);

			ProductType productType = await _unitOfWork
				.ProductTypeRepository.GetByID(product.ProductType.Id);

			if (product == null)
			{
				return BadRequest($"Product with Id={productId} not found");
			}

			try
			{
				DeletionResult deletionResult = await _fileUploadService
					.DeleteFileAsync(product.ImagePublicId);

				if (deletionResult.Error != null)
				{
					return BadRequest("Unable to delete product image.");
				}

				await _unitOfWork.ProductRepository.Delete(productId);
				productType.Products.Remove(product);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal server error: {ex}");
			}
			return Ok($"Successfully deleted product with Id={productId}");
		}
	}
}
