using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.IO;
using Intiri.API.Services;
using System.Xml.Linq;

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
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetStyles()
		{
			IEnumerable<Style> styles = await _unitOfWork.StyleRepository.GetStylesAsync();
			IEnumerable<StyleOutDTO> stylesToReturn = _mapper.Map<IEnumerable<StyleOutDTO>>(styles);

			return Ok(stylesToReturn);
		}

		[HttpGet("name/{styleName}")]
		public async Task<ActionResult<StyleOutDTO>> GetStyleByName(string styleName)
		{
			Style style = await _unitOfWork.StyleRepository.GetStyleByNameAsync(styleName);

			if (style == null)
			{
				return BadRequest("style doesn't exist");
			}

			return _mapper.Map<StyleOutDTO>(style);
		}

		[HttpGet("id/{styleId}")]
		public async Task<ActionResult<StyleOutDTO>> GetStyleById(int styleId)
		{
			Style style = await _unitOfWork.StyleRepository.GetStyleByIdAsync(styleId);

			if (style == null)
			{
				return BadRequest("style doesn't exist");
			}

			return _mapper.Map<StyleOutDTO>(style);
		}


		[HttpPost("add")]
		public async Task<ActionResult<StyleOutDTO>> CreateStyle([FromForm]StyleInDTO styleInDTO)
		{
			bool isStyleExist = await _unitOfWork.StyleRepository.IsStyleByNameExistAsync(styleInDTO.Name);
			if (isStyleExist) return BadRequest("Style name is taken.");

			IFormFile file = styleInDTO.ImageFile;

			if (file.Length > 0)
			{
				string dbPath = await _imageService.AddImageAsync(file, "StyleCoverImages", styleInDTO.Name);
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
			Style style = await _unitOfWork.StyleRepository.GetByID(styleId);

			if (style == null)
			{
				return BadRequest("Style name is not found.");
			}

			try
			{
				string imagePath = style.ImagePath;
				await _imageService.DeleteImageFromFileSystemAsync(imagePath);

				await _unitOfWork.StyleRepository.Delete(styleId);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Internal server error: {ex}");
			}

			return Ok();
		}
	}
}
