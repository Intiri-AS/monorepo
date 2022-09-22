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

namespace Intiri.API.Controllers
{
	public class StylesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors

		public StylesController(
			IUnitOfWork unitOfWork,
			IMapper mapper,
			IFileUploadService fileUploadService) : base(unitOfWork)
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

			IFormFile file = styleInDTO.ImageFile;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(
						file, FileUploadDestinations.StyleCoverImages);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload style cover image.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest("Failed to upload style cover image.");
				}

				Style style = _mapper.Map<Style>(styleInDTO);

				style.ImagePath = uploadResult.SecureUrl.AbsoluteUri;
				style.ImagePublicId = uploadResult.PublicId;

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
			Style style = await _unitOfWork.StyleRepository
				.GetStyleWithStyleImagesByIdAsync(styleId);

			if (style == null)
			{
				return BadRequest("Style name is not found.");
			}

			try
			{
				DeletionResult deletionResult = await _fileUploadService
					.DeleteFileAsync(style.ImagePublicId);

				if (deletionResult.Error != null)
				{
					return BadRequest("Failed to delete style cover image.");
				}

				foreach (StyleImage	si in style.StyleImages)
				{
					deletionResult = await _fileUploadService
						.DeleteFileAsync(si.PublicId);

					if (deletionResult.Error != null)
					{
						return BadRequest("Failed to delete style cover image.");
					}
				}

				await _unitOfWork.StyleRepository.Delete(styleId);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok($"Style '{style.Name}' deleted.");
		}
	}
}
