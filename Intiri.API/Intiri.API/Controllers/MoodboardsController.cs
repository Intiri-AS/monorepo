using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Material;
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
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardId);

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
			Moodboard moodboard = _mapper.Map<Moodboard>(moodboardIn);

			Style style = await _unitOfWork.StyleRepository.GetStyleByIdAsync(moodboardIn.StyleId);
			moodboard.Style = style;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardIn.RoomId);
			moodboard.Room = room;

			IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardIn.MaterialIds);
			moodboard.Materials = materials.ToArray();

			IEnumerable<ColorPallete> colorPalletes = await _unitOfWork.ColorPalleteRepository.GetColorPalletesByIdsListAsync(moodboardIn.ColorPalleteIds);
			moodboard.ColorPalletes = colorPalletes.ToArray();

			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardIn.ProductIds);
			moodboard.Products = products.ToArray();

			_unitOfWork.MoodboardRepository.Insert(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Problem occured while adding moodboard");
		}

		[HttpPost("modify/{moodboardId}")]
		public async Task<ActionResult<ProjectOutDTO>> ModifyMoodboard(int moodboardId, [FromBody] MoodboardModifyDTO modifyDTO)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with Id={moodboardId} not found");
			}

			if (modifyDTO.ColorPalleteIds != null)
			{
				IEnumerable<ColorPallete> colorPalletes =
					await _unitOfWork.ColorPalleteRepository.GetColorPalletesByIdsListAsync(modifyDTO.ColorPalleteIds);

				moodboard.ColorPalletes = colorPalletes.ToList();
			}

			if (modifyDTO.MaterialIds != null)
			{
				IEnumerable<Material> materials =
					await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(modifyDTO.MaterialIds);

				moodboard.Materials = materials.ToList();
			}

			if (modifyDTO.ProductIds != null)
			{
				IEnumerable<Product> products =
					await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(modifyDTO.ProductIds);

				moodboard.Products = products.ToList();
			}

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Something went wrong while modifying moodboard");
		}

		#endregion Public methods
	}
}
