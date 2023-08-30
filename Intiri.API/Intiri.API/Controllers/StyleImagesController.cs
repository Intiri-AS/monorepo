using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Intiri.API.Controllers
{
	public class StyleImagesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploudService _fileUploadService;

		#endregion Fields

		#region Constructors

		public StyleImagesController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploudService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<StyleImageOutDTO>>> GetStyleImages()
		{
			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesAsync();
			IEnumerable<StyleImageOutDTO> styleImagesToReturn = _mapper.Map<IEnumerable<StyleImageOutDTO>>(styleImages);

			return Ok(styleImagesToReturn);
		}

		[HttpGet("id/{imageId}")]
		public async Task<ActionResult<StyleImageOutDTO>> GetStyleImageById(int imageId)
		{
			StyleImage styleImage = await _unitOfWork.StyleImageRepository.GetStyleImageByIdAsync(imageId);

			if (styleImage == null)
			{
				return BadRequest("Style image doesn't exist");
			}

			return _mapper.Map<StyleImageOutDTO>(styleImage);
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult<StyleImageOutDTO>> AddStyleImage([FromForm] StyleMultipleImageInDTO styleImageInDTO)
		{
			Style style = await _unitOfWork.StyleRepository.GetByID(styleImageInDTO.StyleId);

			if (style == null)
			{
				return BadRequest("Target style doesn't exist");
			}

			try
			{
				foreach (var image in styleImageInDTO.ImageFile)
				{
					StyleImage styleImage = _mapper.Map<StyleImage>(styleImageInDTO);

					IFormFile imageFile = image;
					if (imageFile != null && imageFile.Length > 0)
					{
						Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
							await _fileUploadService.TryAddFileToCloudinaryAsync(imageFile, FileUploadDestinations.StyleImages);

						if (uploadResult.Item1 != HttpStatusCode.OK)
						{
							return BadRequest(uploadResult.Item2);
						}

						styleImage.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
						styleImage.PublicId = uploadResult.Item3.PublicId;

						styleImage.Style = style;

						_unitOfWork.StyleImageRepository.Insert(styleImage);
						await _unitOfWork.SaveChanges();
					}
				}

				return Ok(styleImageInDTO);
			}
			catch
			{
				return BadRequest("Problem adding style image");
			}
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPatch("update/{styleImageId}")]
		public async Task<ActionResult<RoomOutDTO>> UpdateStyleImage(int styleImageId, [FromForm] StyleImageInDTO styleImageInDTO)
		{
			StyleImage styleImage = await _unitOfWork.StyleImageRepository.GetByID(styleImageId);
			if (styleImage == null) return BadRequest("Style image doesn't exist");

			Style style = await _unitOfWork.StyleRepository.GetByID(styleImageInDTO.StyleId);
			if (style == null) return BadRequest("Target style doesn't exist");

			IFormFile imageFileFile = styleImageInDTO.ImageFile;
			if (imageFileFile != null && imageFileFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
					await _fileUploadService.TryAddFileToCloudinaryAsync(imageFileFile, FileUploadDestinations.StyleImages, styleImage.PublicId);

				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				styleImage.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				styleImage.PublicId = uploadResult.Item3.PublicId;
			}

            styleImage.RoomId = styleImageInDTO.RoomId;
            styleImage.Provider = styleImageInDTO.Provider;
            styleImage.Style = style;

			_unitOfWork.StyleImageRepository.Update(styleImage);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<StyleImageOutDTO>(styleImage)); ;
			}

			return BadRequest("Faild to Style image!");
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("delete/{imageId}")]
		public async Task<IActionResult> DeleteStyleImage(int imageId)
		{
			StyleImage styleImage = await _unitOfWork.StyleImageRepository.GetByID(imageId);
			if (styleImage == null) return BadRequest("Style image is not found.");

			Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(styleImage.StyleId);
			if (style == null) return BadRequest("Style is not found.");

			try
			{
				style.StyleImages.Remove(styleImage);
				await _unitOfWork.StyleImageRepository.Delete(imageId);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			if (!string.IsNullOrEmpty(styleImage.PublicId))
			{
				Tuple<HttpStatusCode, string> tuple = await _fileUploadService.TryDeleteFileFromCloudinaryAsync(styleImage.PublicId);

				if (tuple.Item1 != HttpStatusCode.OK)
					return Problem(title: "Style image is deleted. Faild delete room image.", statusCode: (int?)tuple.Item1, detail: tuple.Item2);
			}

			return Ok();
		}

		[HttpGet("getStyleImagesByRoomAndStyle/{roomId}/{styleId}")]
		public async Task<ActionResult<StyleImageOutDTO>> GetStyleImagesByRoomAndStyle(int roomId, int styleId)
		{
			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByRoomAndStyleAsync(roomId, styleId);
			IEnumerable<StyleImageOutDTO> styleImagesToReturn = _mapper.Map<IEnumerable<StyleImageOutDTO>>(styleImages);

			return Ok(styleImagesToReturn);
		}

		[HttpGet("SeedMaterialsImport")]
		[AllowAnonymous]
		public async Task<ActionResult> SeedMaterialsImport()
		{
			await Intiri.API.DataAccess.SeedData.SeedData.SeedMaterialsImport2(_unitOfWork, _fileUploadService);

			return Ok();
		}

        [HttpGet("SeedProductsImport")]
        [AllowAnonymous]
        public async Task<ActionResult> SeedProductsImport()
        {
            await Intiri.API.DataAccess.SeedData.SeedData.SeedProductsImport(_unitOfWork, _fileUploadService);

            return Ok();
        }

        [HttpGet("SeedDesignerPortfolioImg")]
        [AllowAnonymous]
        public async Task<ActionResult> SeedDesignerPortfolioImg()
        {
            await Intiri.API.DataAccess.SeedData.SeedData.SeedDesignerPortfolioImg(_unitOfWork, _fileUploadService);

            return Ok();
        }

        [HttpGet("getStyleImagesByRoom/{roomId}")]
        public async Task<ActionResult<StyleImageOutDTO>> getStyleImagesByRoom(int roomId)
        {
            IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByRoomAsync(roomId);
            IEnumerable<StyleImageOutDTO> styleImagesToReturn = _mapper.Map<IEnumerable<StyleImageOutDTO>>(styleImages);

            return Ok(styleImagesToReturn);
        }
    }
}
