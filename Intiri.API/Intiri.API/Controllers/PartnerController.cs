using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Intiri.API.Services;
using Intiri.API.Extension;
using Intiri.API.Models.Product;


namespace Intiri.API.Controllers
{
	public class PartnerController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IAccountService _accountService;
		private readonly ILogger<UsersController> _logger;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors

		public PartnerController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploadService fileUploadService, ILogger<UsersController> logger) 
			: base(unitOfWork)
		{
			_mapper = mapper;
			_logger = logger;
			_fileUploadService = fileUploadService;
			_accountService = accountService;
		}

		#endregion Constructors


		[HttpGet("products")]
		public async Task<ActionResult<IEnumerable<ProductOutDTO>>> GetAllPartnerProducts()
		{ 
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IEnumerable<ProductOutDTO> productsOut = _mapper.Map<IEnumerable<ProductOutDTO>>(partner.Products);

			return Ok(productsOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<ProductOutDTO>> AddPartnerProduct([FromForm] ProductInDTO productInDTO)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
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
		public async Task<IActionResult> DeleteParnerProduct(int productId)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			Product product = await _unitOfWork.ProductRepository.GetProductByIdAsync(productId);
			if (product == null) return BadRequest($"Product '{product.Name}' not found");

			try
			{
				DeletionResult deletionResult = await _fileUploadService.DeleteFileAsync(product.ImagePublicId);
				if (deletionResult.Error != null) return BadRequest("Failed to delete product image.");

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

		[HttpPut("parner")]
		public async Task<ActionResult<PartnerOutDTO>> UpdatePartnerProfile(PartnerInDTO partnerInDTO)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			_mapper.Map(partnerInDTO, partner);
			_unitOfWork.PartnerRepository.Update(partner);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<PartnerOutDTO>(partner);
			}

			return BadRequest("Failed to update user.");
		}

		[HttpPost("addPhoto")]
		public async Task<ActionResult<PartnerLogoPathOutDTO>> AddPhoto([FromForm] UserPhotoFileInDTO inFile)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IFormFile file = inFile.PhotoPath;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.PartnerLogos);
				}
				catch (Exception ex)
				{
					return BadRequest($"Failed to upload partner logo: {ex.Message}");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest($"Failed to upload partner logo: {uploadResult.Error.Message}");
				}

				if (partner.LogoPath != null)
				{
					DeletionResult deletionResult = null;
					try
					{
						deletionResult = await _fileUploadService.DeleteFileAsync(partner.LogoPublicId);
					}
					catch (Exception)
					{
						return BadRequest("Failed to delete partner logo.");
					}

					if (deletionResult.Error != null)
					{
						_logger.LogWarning("Faild delete all photo from cloudinary services");
					}
				}

				partner.LogoPath = uploadResult.SecureUrl.AbsoluteUri;
				partner.LogoPublicId = uploadResult.PublicId;

				_unitOfWork.PartnerRepository.Update(partner);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(new PartnerLogoPathOutDTO() { LogoPath = partner.LogoPath });
				}
			}

			return BadRequest("Problem adding user photo.");
		}
	}
}
