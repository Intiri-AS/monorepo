using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Microsoft.AspNetCore.Mvc;

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

		#endregion Public methods
	}
}
