using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class ColorPalletesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ColorPalletesController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ColorPalleteOutDTO>>> GetColorPalletes()
		{
			IEnumerable<ColorPallete> colorPalletes = await _unitOfWork.ColorPalleteRepository.GetColorPalletesAsync();
			IEnumerable<ColorPalleteOutDTO> colorPalletesOut = _mapper.Map<IEnumerable<ColorPalleteOutDTO>>(colorPalletes);

			return Ok(colorPalletesOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<ColorPalleteOutDTO>> AddColorPallete([FromForm] ColorPalleteInDTO colorPalleteIn)
		{
			IEnumerable<ColorPallete> allColorPalletes = await _unitOfWork.ColorPalleteRepository.GetColorPalletesAsync();

			if (allColorPalletes.Any(cp => cp.Name == colorPalleteIn.Name))
			{
				return BadRequest($"Name '{colorPalleteIn.Name}' already taken");
			}

			if (allColorPalletes.Any(cp => cp.Number == colorPalleteIn.Number))
			{
				return BadRequest($"Number '{colorPalleteIn.Number}' already taken");
			}

			ColorPallete colorPallete = _mapper.Map<ColorPallete>(colorPalleteIn);

			_unitOfWork.ColorPalleteRepository.Insert(colorPallete);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ColorPallete>(colorPallete));
			}

			return BadRequest("Problem occured while adding color pallete");
		}

		#endregion Public methods
	}
}
