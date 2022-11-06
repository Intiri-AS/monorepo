using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.IO;
using Intiri.API.Services;
using System.Xml.Linq;
using Intiri.API.Models.DTO.OutputDTO.Style;
using CloudinaryDotNet.Actions;
using Intiri.API.Shared;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Room;
using System.Net;

namespace Intiri.API.Controllers
{
	public class StylesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploudService _fileUploadService;

		#endregion Fields

		#region Constructors

		public StylesController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploudService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<StyleOutDTO>>> GetStyles()
		{
			IEnumerable<Style> styles = await _unitOfWork.StyleRepository.GetStylesAsync();
			IEnumerable<StyleOutDTO> stylesToReturn = _mapper.Map<IEnumerable<StyleOutDTO>>(styles);

			return Ok(stylesToReturn);
		}

		[HttpGet("id/{styleId}")]
		public async Task<ActionResult<StyleOutDTO>> GetStyleById(int styleId)
		{
			Style style = await _unitOfWork.StyleRepository
				.GetStyleWithStyleImagesByIdAsync(styleId);

			if (style == null)
			{
				return BadRequest("Style doesn't exist");
			}

			return _mapper.Map<StyleOutDTO>(style);
		}

		[HttpGet("styleImages/{styleId}")]
		public async Task<ActionResult<StyleWithImagesOutDTO>> GetStyleWithStyleImagesById(int styleId)
		{
			Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(styleId);

			if (style == null)
			{
				return BadRequest("Style doesn't exist");
			}

			return _mapper.Map<StyleWithImagesOutDTO>(style);
		}

		[HttpPost("add")]
		public async Task<ActionResult<StyleOutDTO>> AddStyle([FromForm]StyleInDTO styleInDTO)
		{
			if (await _unitOfWork.StyleRepository.IsStyleByNameExistAsync(styleInDTO.Name))
			{
				return BadRequest("Style name is taken.");
			}

			Style style = _mapper.Map<Style>(styleInDTO);

			IFormFile imageFile = styleInDTO.ImageFile;
			if (imageFile != null && imageFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = 
					await _fileUploadService.TryAddFileToCloudinaryAsync(imageFile, FileUploadDestinations.StyleCoverImages);
				
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				style.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				style.ImagePublicId = uploadResult.Item3.PublicId;

				_unitOfWork.StyleRepository.Insert(style);

				if (await _unitOfWork.SaveChanges())
				{
					return _mapper.Map<StyleOutDTO>(style);
				}
			}

			return BadRequest("Problem adding style");
		}

		[HttpDelete("delete/{styleId}")]
		public async Task<IActionResult>DeleteStyle(int styleId)
		{
			Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(styleId);

			if (style == null) return BadRequest("Style name is not found.");

			List<StyleImage> styleImages = style.StyleImages.ToList();

			try
			{
				await _unitOfWork.StyleRepository.Delete(styleId);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			if (!string.IsNullOrEmpty(style.ImagePublicId))
			{
				Tuple<HttpStatusCode, string> tuple = await _fileUploadService.TryDeleteFileFromCloudinaryAsync(style.ImagePublicId);

				if (tuple.Item1 != HttpStatusCode.OK)
				{
					return Problem(title: "Style is deleted. Faild delete style cover image.", statusCode: (int?)tuple.Item1, detail: tuple.Item2);
				}
			}

			// delete all style images from cloudinary
			foreach (StyleImage si in styleImages)
			{
				await _fileUploadService.TryDeleteFileFromCloudinaryAsync(si.PublicId);
			}

			return Ok();
		}

		[HttpPatch("update/{styleId}")]
		public async Task<ActionResult<StyleOutDTO>> UpdateStyle(int styleId, [FromForm] StyleInDTO styleInDTO)
		{
			Style style = await _unitOfWork.StyleRepository.GetByID(styleId);
			if(style == null) return BadRequest("Style is not found.");

			_mapper.Map(styleInDTO, style);

			IFormFile imageFile = styleInDTO.ImageFile;
			if (imageFile != null && imageFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = 
					await _fileUploadService.TryAddFileToCloudinaryAsync(imageFile, FileUploadDestinations.StyleCoverImages, style.ImagePublicId);
				
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				style.ImagePath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				style.ImagePublicId = uploadResult.Item3.PublicId;
			}

			_unitOfWork.StyleRepository.Update(style);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<StyleOutDTO>(style));
			}

			return BadRequest("Faild to update style.");
		}
	}
}
