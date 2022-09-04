using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Material;
using Intiri.API.Models.Room;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class MaterialsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IImageService _imageService;

		#endregion Fields

		#region Constructors

		public MaterialsController(IUnitOfWork unitOfWork, IMapper mapper, IImageService imageService) : base(unitOfWork)
		{
			_mapper = mapper;
			_imageService = imageService;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<MaterialOutDTO>>> GetRooms()
		{
			IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetAllMaterialsAsync();
			IEnumerable<MaterialOutDTO> materialsToReturn = _mapper.Map<IEnumerable<MaterialOutDTO>>(materials);

			return Ok(materialsToReturn);
		}

		[HttpGet("id/{materialId}")]
		public async Task<ActionResult<MaterialOutDTO>> GetMaterialById(int materialId)
		{
			Material material = await _unitOfWork.MaterialRepository.GetByID(materialId);

			if (material == null)
			{
				return BadRequest("Material doesn't exist");
			}

			return _mapper.Map<MaterialOutDTO>(material);
		}

		[HttpPost("add")]
		public async Task<ActionResult<MaterialOutDTO>> AddMaterial([FromForm] MaterialInDTO materialInDTO)
		{
			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetMaterialTypeMaterialsByIdAsync(materialInDTO.MaterialTypeId);
			
			if (materialType == null) return BadRequest("Material type doesn't exist");

			if (materialType.Materials.Any(r => r.Name == materialInDTO.Name))
			{
				return BadRequest("Material name with material type already exist");
			}

			IFormFile file = materialInDTO.ImageFile;

			if (file.Length > 0)
			{
				string imgPrefixName = materialInDTO.Name + materialInDTO.MaterialTypeId + "_";
				string dbPath = await _imageService.AddImageAsync(file, "MaterialImages", imgPrefixName);
				
				Material material = _mapper.Map<Material>(materialInDTO);
				material.ImagePath = dbPath;
				_unitOfWork.MaterialRepository.Insert(material);

				if (await _unitOfWork.SaveChanges())
				{
					materialType.Materials.Add(material);
					return _mapper.Map<MaterialOutDTO>(material);
				}
			}

			return BadRequest("Problem adding material.");
		}

		[HttpDelete("delete/{materialId}")]
		public async Task<IActionResult> DeleteMaterial(int materialId)
		{
			Material material = await _unitOfWork.MaterialRepository.GetByID(materialId);
			MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetByID(material.MaterialTypeId);

			if (material == null)
			{
				return BadRequest("Material is not found.");
			}

			try
			{
				string imagePath = material.ImagePath;
				await _imageService.DeleteImageFromFileSystemAsync(imagePath);

				await _unitOfWork.MaterialRepository.Delete(materialId);
				materialType.Materials.Remove(material);

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
