using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Material;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Services;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;


namespace Intiri.API.Controllers
{
	[Authorize]
	public class ProductsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploudService _fileUploadService;

		#endregion Fields

		#region Constructors
		public ProductsController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploudService fileUploadService) : base(unitOfWork)
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

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithFullProductsAsync(pUser.PartnerId);
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

		[Authorize(Policy = PolicyNames.PartnerPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult<ProductOutDTO>> AddPartnerProduct([FromForm] MultipleProductInDTO productInDTO)
		{
			//PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			PartnerContact pUser = await _unitOfWork.UserRepository.GetUserByIdAsync<PartnerContact>(User.GetUserId());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			ProductType productType = await _unitOfWork.ProductTypeRepository.GetProductTypeProductsByIdAsync(productInDTO.ProductTypeId);
			if (productType == null) return BadRequest("Product type doesn't exist");

			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetByID(productInDTO.MaterialId);
			//if (materialType == null) return BadRequest("Material type doesn't exist");

			if (productType.Products.Any(p => p.Name == productInDTO.Name))
			{
				return BadRequest(
					$"Product name: '{productInDTO.Name}' already exists" +
					$" for product type: {productInDTO.ProductTypeId}");
			}

			try
			{
                foreach (var imageFile in productInDTO.ImageFile)
                {
                    Product product = _mapper.Map<Product>(productInDTO);
                    if (imageFile != null && imageFile.Length > 0)
                    {
                        Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                            await _fileUploadService.TryAddFileToCloudinaryAsync(imageFile, FileUploadDestinations.ProductImages);

                        if (uploadResult.Item1 != HttpStatusCode.OK)
                        {
                            return BadRequest(uploadResult.Item2);
                        }

                        product.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                        product.ImagePublicId = uploadResult.Item3.PublicId;

                        product.ProductType = productType;
                        product.Material = materialType;
                        product.Partner = partner;

                        _unitOfWork.ProductRepository.Insert(product);

                        await _unitOfWork.SaveChanges();
                    }
                }
                return Ok(productInDTO);
            }
			catch
			{
                return BadRequest("Probem occured while adding product");
            }
		}

		[Authorize(Policy = PolicyNames.ProductPolicy)]
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
				partner.Products.Remove(product);
				await _unitOfWork.ProductRepository.Delete(productId);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			if (!string.IsNullOrEmpty(product.ImagePublicId))
			{
				Tuple<HttpStatusCode, string> tuple = await _fileUploadService.TryDeleteFileFromCloudinaryAsync(product.ImagePublicId);

				if (tuple.Item1 != HttpStatusCode.OK)
					return Problem(title: "Product is deleted. Faild delete product image.", statusCode: (int?)tuple.Item1, detail: tuple.Item2);
			}

			return Ok();
		}

		[Authorize(Policy = PolicyNames.ProductPolicy)]
		[HttpPatch("update/{productId}")]
		public async Task<IActionResult> UpdateProduct(int productId, [FromForm]ProductInDTO productInDTO)
		{
			Product product = await _unitOfWork.ProductRepository.GetProductByIdAsync(productId);
			if (product == null) return BadRequest($"Product '{product.Name}' not found");

			_mapper.Map(productInDTO, product);

			ProductType productType = await _unitOfWork.ProductTypeRepository
				.GetProductTypeProductsByIdAsync(productInDTO.ProductTypeId);
			if (productType == null) return BadRequest("Product type doesn't exist");

			MaterialType materialType = await _unitOfWork.MaterialTypeRepository
				.GetByID(productInDTO.MaterialId);
			//if (materialType == null) return BadRequest("Material type doesn't exist");

			IFormFile imageFile = productInDTO.ImageFile;
			if (imageFile != null && imageFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = 
					await _fileUploadService.TryAddFileToCloudinaryAsync(imageFile, FileUploadDestinations.ProductImages, product.ImagePublicId);
				
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				product.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				product.ImagePublicId = uploadResult.Item3.PublicId;
			}

			product.ProductType = productType;
			product.Material = materialType;

			_unitOfWork.ProductRepository.Update(product);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProductOutDTO>(product)); ;
			}

			return BadRequest("Faild to update product.");
		}
	}
}
