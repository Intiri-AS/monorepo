using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.Material;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	[Authorize]
	public class MaterialTypesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public MaterialTypesController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<MaterialTypeOutDTO>>> GetMaterialTypes()
		{
			IEnumerable<MaterialType> materialTypes = await _unitOfWork.MaterialTypeRepository.GetAllMaterialTypesAsync();
			IEnumerable<MaterialTypeOutDTO> materialTypesToReturn = _mapper.Map<IEnumerable<MaterialTypeOutDTO>>(materialTypes);

			return Ok(materialTypesToReturn);
		}

		[HttpGet("id/{materialTypeId}")]
		public async Task<ActionResult<MaterialTypeOutDTO>> GetMaterialTypeById(int materialTypeId)
		{
			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetMaterialTypeByIdAsync(materialTypeId);
			MaterialTypeOutDTO materialTypeOutDTO = _mapper.Map<MaterialTypeOutDTO>(materialType);

			return Ok(materialTypeOutDTO);
		}

		[HttpGet("materials/{materialTypeId}")]
		public async Task<ActionResult<MaterialTypeMaterialsOutDTO>> GetMaterialTypeWithRoomsById(int materialTypeId)
		{
			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetMaterialTypeMaterialsByIdAsync(materialTypeId);
			MaterialTypeMaterialsOutDTO materialTypeMaterialsOutDTO = _mapper.Map<MaterialTypeMaterialsOutDTO>(materialType);

			return Ok(materialTypeMaterialsOutDTO);
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult> AddMaterialType(MaterialTypeInDTO materialTypeInDTO)
		{
			if (await _unitOfWork.RoomTypeRepository.IsRoomTypeNameExists(materialTypeInDTO.Name))
			{
				return BadRequest("Material type name is taken");
			}

			MaterialType materialType = _mapper.Map<MaterialType>(materialTypeInDTO);
			_unitOfWork.MaterialTypeRepository.Insert(materialType);

			if (!await _unitOfWork.SaveChanges())
			{
				return BadRequest();
			}

			return Ok();
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("delete/{materialTypeId}")]
		public async Task<ActionResult> DeleteMaterialType(int materialTypeId)
		{
			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetMaterialTypeMaterialsByIdAsync(materialTypeId);

			if (materialType == null)
			{
				return BadRequest("Material type doesn' exist.");
			}

			try
			{
				await _unitOfWork.MaterialTypeRepository.Delete(materialType.Id);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}

	}
}
