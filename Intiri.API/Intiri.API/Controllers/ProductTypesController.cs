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
			ProductType productType = await _unitOfWork.ProductTypeRepository.GetProductTypeByIdAsync(productTypeId);
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

			if(!await _unitOfWork.SaveChanges())
			{
				return BadRequest();
			}

			return Ok();
		}
	}
}
