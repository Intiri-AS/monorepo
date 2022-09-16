using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Product;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class ProductTypesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProductTypesController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProductTypeOutDTO>>> GetProductTypes()
		{
			IEnumerable<ProductType> productTypes = await _unitOfWork.ProductTypeRepository.GetAllProductTypesAsync();
			IEnumerable<ProductTypeOutDTO> productTypesToReturn = _mapper.Map<IEnumerable<ProductTypeOutDTO>>(productTypes);

			return Ok(productTypesToReturn);
		}

		[HttpGet("id/{productTypeId}")]
		public async Task<ActionResult<ProductTypeOutDTO>> GetProductTypeById(int productTypeId)
		{
			ProductType productType = await _unitOfWork.ProductTypeRepository.GetByID(productTypeId);
			ProductTypeOutDTO productTypeOutDTO = _mapper.Map<ProductTypeOutDTO>(productType);

			return Ok(productTypeOutDTO);
		}

		[HttpPost("add")]
		public async Task<ActionResult> AddProductType(ProductTypeInDTO productTypeInDTO)
		{
			if (await _unitOfWork.ProductTypeRepository.IsProductTypeNameExists(productTypeInDTO.Name))
			{
				return BadRequest("Product type already exists");
			}

			ProductType productType = _mapper.Map<ProductType>(productTypeInDTO);
			_unitOfWork.ProductTypeRepository.Insert(productType);

			if(await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProductTypeOutDTO>(productType));
			}

			return BadRequest("Something went wrong while adding product type");
		}

		[HttpDelete("delete/{productTypeId}")]
		public async Task<IActionResult> DeleteProductType(int productTypeId)
		{
			ProductType productType = await _unitOfWork.ProductTypeRepository.GetByID(productTypeId);

			if (productType == null)
			{
				return BadRequest($"Material type for Id={productTypeId} not found");
			}

			_unitOfWork.ProductTypeRepository.Delete(productType);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok($"Successfully deleted material type with Id={productTypeId}");
			}
			return BadRequest("Problem occured while deleting material type");
		}
	}
}
