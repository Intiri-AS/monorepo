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

namespace Intiri.API.Controllers
{
	public class StylesController : BaseApiController
	{
		#region Fields

		IImageService _imageService;
		IMapper _mapper;

		#endregion Fields

		#region Constructors

		public StylesController(IUnitOfWork unitOfWork, IImageService imageService, IMapper mapper) : base(unitOfWork)
		{
			_imageService = imageService;
			_mapper = mapper;
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
			Style style = await _unitOfWork.StyleRepository.GetStyleByIdAsync(styleId);

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
				string imgPrefixName = styleInDTO.Name + "_";
				string dbPath = await _imageService.AddImageAsync(file, "StyleCoverImages", imgPrefixName);
				
				Style style = _mapper.Map<Style>(styleInDTO);
				style.ImagePath = dbPath;
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
			Style style = await _unitOfWork.StyleRepository.GetStyleByIdAsync(styleId);

			if (style == null)
			{
				return BadRequest("Style name is not found.");
			}

			try
			{
				string imagePath = style.ImagePath;
				await _imageService.DeleteImageFromFileSystemAsync(imagePath);

				foreach (StyleImage	si in style.StyleImages)
				{
					await _imageService.DeleteImageFromFileSystemAsync(si.Path);
				}

				await _unitOfWork.StyleRepository.Delete(styleId);
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
