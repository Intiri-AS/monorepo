using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Material;
using Intiri.API.Models.Room;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class MaterialsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors

		public MaterialsController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploadService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<MaterialOutDTO>>> GetMaterials()
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
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService
						.UploadFileAsync(file, FileUploadDestinations.MaterialImages);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload material image.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest("Failed to upload material image.");
				}

				Material material = _mapper.Map<Material>(materialInDTO);

				material.ImagePath = uploadResult.SecureUrl.AbsoluteUri;
				material.ImagePublicId = uploadResult.PublicId;

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
				DeletionResult deletionResult = await _fileUploadService
					.DeleteFileAsync(material.ImagePublicId);

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
