using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.Material;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Net;

namespace Intiri.API.Controllers
{
    [Authorize]
    public class MaterialsController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;
        private readonly IFileUploudService _fileUploadService;

        #endregion Fields

        #region Constructors

        public MaterialsController(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IFileUploudService fileUploadService
        )
            : base(unitOfWork)
        {
            _mapper = mapper;
            _fileUploadService = fileUploadService;
        }

        #endregion Constructors

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaterialOutDTO>>> GetMaterials()
        {
            IEnumerable<Material> materials =
                await _unitOfWork.MaterialRepository.GetAllMaterialsAsync();
            IEnumerable<MaterialOutDTO> materialsToReturn = _mapper.Map<
                IEnumerable<MaterialOutDTO>
            >(materials);

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

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPost("add")]
        public async Task<ActionResult<MaterialOutDTO>> AddMaterial(
            [FromForm] MultipleMaterialInDTO materialInDTO
        )
        {
            MaterialType materialType =
                await _unitOfWork.MaterialTypeRepository.GetMaterialTypeMaterialsByIdAsync(
                    materialInDTO.MaterialTypeId
                );

            if (materialType == null)
                return BadRequest("Material type doesn't exist");

            if (materialType.Materials.Any(r => r.Name == materialInDTO.Name))
            {
                return BadRequest("Material name with material type already exist");
            }

            try
            {
                foreach (var imageFile in materialInDTO.ImageFile)
                {
                    Material material = _mapper.Map<Material>(materialInDTO);

                    if (imageFile != null && imageFile.Length > 0)
                    {
                        Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                            await _fileUploadService.TryAddFileToCloudinaryAsync(
                                imageFile,
                                FileUploadDestinations.MaterialImages
                            );

                        if (uploadResult.Item1 != HttpStatusCode.OK)
                        {
                            return BadRequest(uploadResult.Item2);
                        }

                        material.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                        material.ImagePublicId = uploadResult.Item3.PublicId;

                        material.MaterialType = materialType;

                        _unitOfWork.MaterialRepository.Insert(material);

                        await _unitOfWork.SaveChanges();
                    }
                }

                return Ok(materialInDTO);
            }
            catch
            {
                return BadRequest("Problem adding material.");
            }
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpDelete("delete/{materialId}")]
        public async Task<IActionResult> DeleteMaterial(int materialId)
        {
            Material material =
                await _unitOfWork.MaterialRepository.GetMaterialByIdWithMoodboardsAsync(materialId);
            if (material == null)
                return BadRequest("Material is not found.");

            if (material.Moodboards.Count > 0)
                return BadRequest("Deletion restricted. Material is part of Moodboard.");

            try
            {
                await _unitOfWork.MaterialRepository.Delete(materialId);
                await _unitOfWork.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest($"Internal error: {ex}");
            }

            if (!string.IsNullOrEmpty(material.ImagePublicId))
            {
                Tuple<HttpStatusCode, string> tuple =
                    await _fileUploadService.TryDeleteFileFromCloudinaryAsync(
                        material.ImagePublicId
                    );

                if (tuple.Item1 != HttpStatusCode.OK)
                    return Problem(
                        title: "Material is deleted. Faild delete material image.",
                        statusCode: (int?)tuple.Item1,
                        detail: tuple.Item2
                    );
            }

            return Ok();
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPatch("update/{materialId}")]
        public async Task<ActionResult<MaterialOutDTO>> UpdateMaterial(
            int materialId,
            [FromForm] MaterialInDTO materialInDTO
        )
        {
            Material material = await _unitOfWork.MaterialRepository.GetByID(materialId);
            if (material == null)
                return BadRequest("Material is not found.");

            MaterialType materialType = await _unitOfWork.MaterialTypeRepository.GetByID(
                materialInDTO.MaterialTypeId
            );
            if (materialType == null)
                return BadRequest("Material type is not found.");

            _mapper.Map(materialInDTO, material);

            IFormFile imageFile = materialInDTO.ImageFile;
            if (imageFile != null && imageFile.Length > 0)
            {
                Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                    await _fileUploadService.TryAddFileToCloudinaryAsync(
                        imageFile,
                        FileUploadDestinations.MaterialImages,
                        material.ImagePublicId
                    );

                if (uploadResult.Item1 != HttpStatusCode.OK)
                {
                    return BadRequest(uploadResult.Item2);
                }

                material.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                material.ImagePublicId = uploadResult.Item3.PublicId;

                material.MaterialType = materialType;
            }

            _unitOfWork.MaterialRepository.Update(material);

            if (await _unitOfWork.SaveChanges())
            {
                return Ok(_mapper.Map<MaterialOutDTO>(material));
            }

            return BadRequest("Faild to update material.");
        }
    }
}
