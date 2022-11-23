using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.PolicyNames;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
    public class ColorPalettesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ColorPalettesController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ColorPaletteOutDTO>>> GetColorPalettes()
		{
			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesAsync();
			IEnumerable<ColorPaletteOutDTO> colorPalettesOut = _mapper.Map<IEnumerable<ColorPaletteOutDTO>>(colorPalettes);

			return Ok(colorPalettesOut);
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult<ColorPaletteOutDTO>> AddColorPalette([FromForm] ColorPaletteInDTO colorPaletteIn)
		{
			IEnumerable<ColorPalette> allColorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesAsync();

			if (allColorPalettes.Any(cp => cp.Name == colorPaletteIn.Name))
			{
				return BadRequest($"Name '{colorPaletteIn.Name}' already taken");
			}

			if (allColorPalettes.Any(cp => cp.Number == colorPaletteIn.Number))
			{
				return BadRequest($"Number '{colorPaletteIn.Number}' already taken");
			}

			ColorPalette colorPalette = _mapper.Map<ColorPalette>(colorPaletteIn);

			_unitOfWork.ColorPaletteRepository.Insert(colorPalette);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ColorPalette>(colorPalette));
			}

			return BadRequest("Problem occured while adding color pallete");
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPatch("update/colorPaletteId")]
		public async Task<ActionResult> UpdateColorPalette(int colorPaletteId, [FromForm] ColorPaletteInDTO colorPaletteIn)
		{
			ColorPalette colorPalette = await _unitOfWork.ColorPaletteRepository.GetColorPaletteById(colorPaletteId);

			if (colorPalette == null)
			{
				return BadRequest("Color palette doesn' exist.");
			}

			_mapper.Map(colorPaletteIn, colorPalette);

			_unitOfWork.ColorPaletteRepository.Update(colorPalette);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ColorPalette>(colorPalette));
			}

			return BadRequest("Faild to update color palette.");
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("delete/{colorPaletteId}")]
		public async Task<ActionResult> DeleteColorPalette(int colorPaletteId)
		{
			ColorPalette colorPalette = await _unitOfWork.ColorPaletteRepository.GetColorPaletteById(colorPaletteId);

			if (colorPalette == null)
			{
				return BadRequest("Color palette doesn' exist.");
			}

			try
			{
				await _unitOfWork.ColorPaletteRepository.Delete(colorPaletteId);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}

		#endregion Public methods
	}
}
