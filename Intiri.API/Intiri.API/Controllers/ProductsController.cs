using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
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
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors
		public ProductsController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploadService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}
		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetProducts()
		{
			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsAsync();

			IEnumerable<ProductOutDTO> productsOut = _mapper.Map<IEnumerable<ProductOutDTO>>(products);

			return Ok(productsOut);
		}

		[HttpGet("partnerProducts")]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetAllPartnerProducts()
		{
			//PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			PartnerContact pUser = await _unitOfWork.UserRepository.GetUserByIdAsync<PartnerContact>(User.GetUserId());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IEnumerable<ProductOutDTO> productsOut = _mapper.Map<IEnumerable<ProductOutDTO>>(partner.Products);

			return Ok(productsOut);
		}

		[HttpGet("partnerProducts/{partnerId}")]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetAllPartnerProductsById(int partnerId)
		{
			//PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			PartnerContact pUser = await _unitOfWork.UserRepository.GetUserByIdAsync<PartnerContact>(partnerId);
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IEnumerable<ProductOutDTO> productsOut = _mapper.Map<IEnumerable<ProductOutDTO>>(partner.Products);

			return Ok(productsOut);
		}

		[HttpGet("id/{productId}")]
		public async Task<ActionResult<ProductOutDTO>> GetProductByProductId(int productId)
		{
			Product product = await _unitOfWork.ProductRepository.GetByID(productId);

			if (product == null)
			{
				return BadRequest($"Product with Id={productId} doesn't exist");
			}

			return Ok(_mapper.Map<ProductOutDTO>(product));
		}

		[HttpPost("add")]
		public async Task<ActionResult<ProductOutDTO>> AddPartnerProduct([FromForm] ProductInDTO productInDTO)
		{
			//PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			PartnerContact pUser = await _unitOfWork.UserRepository.GetUserByIdAsync<PartnerContact>(User.GetUserId());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			ProductType productType = await _unitOfWork.ProductTypeRepository
				.GetProductTypeProductsByIdAsync(productInDTO.ProductTypeId);

			if (productType == null) return BadRequest("Product type doesn't exist");

			if (productType.Products.Any(p => p.Name == productInDTO.Name))
			{
				return BadRequest(
					$"Product name: '{productInDTO.Name}' already exists" +
					$" for product type: {productInDTO.ProductTypeId}");
			}

			IFormFile file = productInDTO.ImageFile;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(
							file, FileUploadDestinations.ProductImages);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload product image.");
				}

				if (uploadResult.Error != null) return BadRequest("Failed to upload product image.");

				Product product = _mapper.Map<Product>(productInDTO);

				product.ImagePath = uploadResult.SecureUrl.AbsoluteUri;
				product.ImagePublicId = uploadResult.PublicId;
				product.ProductType = productType;

				product.Material = await _unitOfWork.MaterialRepository.GetByID(productInDTO.MaterialId);
				product.Partner = partner;

				_unitOfWork.ProductRepository.Insert(product);

				if (await _unitOfWork.SaveChanges())
				{
					productType.Products.Add(product);
					partner.Products.Add(product);

					return Ok(_mapper.Map<ProductOutDTO>(product));
				}
			}

			return BadRequest("Probem occured while adding product");
		}


		[HttpDelete("delete/{productId}")]
		public async Task<IActionResult> DeleteProduct(int productId)
		{
			Product product = await _unitOfWork.ProductRepository.GetProductByIdAsync(productId);

			if (product == null)
			{
				return BadRequest($"Product '{product.Name}' not found");
			}

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(product.Partner.Id);

			try
			{
				if (product.ImagePublicId != null)
				{
					DeletionResult deletionResult = await _fileUploadService.DeleteFileAsync(product.ImagePublicId);
					if (deletionResult.Error != null) return BadRequest("Failed to delete product image.");
				}

				partner.Products.Remove(product);

				await _unitOfWork.ProductRepository.Delete(productId);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal server error: {ex}");
			}

			return Ok();
		}
	}
}
