using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class MoodboardsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public MoodboardsController(IUnitOfWork unitOfWork, IMapper mapper): base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<MoodboardOutDTO>>> GetMoodboards()
		{
			IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboards();

			IEnumerable<MoodboardOutDTO> moodboardsOut = _mapper.Map<IEnumerable<MoodboardOutDTO>>(moodboards); ;

			return Ok(moodboardsOut);
		}

		[HttpGet("id/{moodboardId}")]
		public async Task<ActionResult<MoodboardOutDTO>> GetMoodboardById(int moodboardId)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with id {moodboardId} doesn't exist");
			}

			MoodboardOutDTO moodboardOut = _mapper.Map<MoodboardOutDTO>(moodboard);

			return Ok(moodboardOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<MoodboardOutDTO>> AddMoodboard(MoodboardInDTO moodboardIn)
		{

            User user = await _unitOfWork.UserRepository.GetByID(User.GetUserId());

            Moodboard moodboard = _mapper.Map<Moodboard>(moodboardIn);

			moodboard.Designer = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(moodboard.DesignerId);

			Style style = await _unitOfWork.StyleRepository.GetByID(moodboardIn.StyleId);
			moodboard.Style = style;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardIn.RoomId);
			moodboard.Room = room;

			IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardIn.MaterialIds);
			moodboard.Materials = materials.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardIn.ColorPaletteIds);
			moodboard.ColorPalettes = colorPalettes.ToArray();

			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardIn.ProductIds);
			moodboard.Products = products.ToArray();

			_unitOfWork.MoodboardRepository.Insert(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Problem occured while adding moodboard");
		}

		[HttpPatch("template/{moodboardId}/{setTemplate}")]
		public async Task<ActionResult> EditMoodboard(int moodboardId, bool setTemplate)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with Id={moodboardId} not found");
			}

			moodboard.IsTemplate = setTemplate;

			_unitOfWork.MoodboardRepository.Update(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok();
			}

			return BadRequest("Something went wrong while set template moodboard");
		}

		#endregion Public methods
	}
}
