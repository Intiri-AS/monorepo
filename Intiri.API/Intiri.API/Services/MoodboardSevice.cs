using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared.Enums;

namespace Intiri.API.Services
{
	public class MoodboardSevice : IMoodboardSevice
	{
		#region Fields

		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors
		public MoodboardSevice( IUnitOfWork unitOfWork, IMapper mapper)
		{
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		#endregion Constructors

		public async Task<IEnumerable<MoodboardMatchDTO>> FindMoodboardMatchesAsync(MoodboardMatchInDTO matchInDTO)
		{
			IEnumerable<Moodboard> roomMoodboards =
				await _unitOfWork.MoodboardRepository.GetMoodboardsByRoomId(matchInDTO.RoomId);

			Dictionary<Moodboard, int> moodboardToMatchDictionary = new();
			foreach (Moodboard moodboard in roomMoodboards)
			{
				int styleImageMatches = moodboard.Style.StyleImages
				.Select(si => si.Id).ToList()
				.Intersect(matchInDTO.StyleImageIds).Count();

				int colorPaletteMatches = 0;
				if (matchInDTO.ColorPaletteIds != null && matchInDTO.ColorPaletteIds.Count > 0)
				{
					colorPaletteMatches = moodboard.ColorPalettes
					.Select(cp => cp.Id).ToList()
					.Intersect(matchInDTO.ColorPaletteIds).Count();
				}

				moodboardToMatchDictionary.Add(moodboard, styleImageMatches + colorPaletteMatches);
			}

			List<KeyValuePair<Moodboard, int>> moodboardTopMatchOrder = moodboardToMatchDictionary.OrderByDescending(d => d.Value).ToList();

			// take first two with high match
			List<KeyValuePair<Moodboard, int>> moodboardTopMatch = moodboardTopMatchOrder.Take(2).ToList();
			// take last with the lowest match
			moodboardTopMatch.Add(moodboardTopMatchOrder.Last());

			List<MoodboardMatchDTO> moodboardsMatch = new List<MoodboardMatchDTO>();

			for (int i = 0; i < moodboardTopMatch.Count; i++)
			{
				Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardTopMatch[i].Key.Id);

				MoodboardMatchDTO moodboardMatch = new()
				{
					Moodboard = _mapper.Map<MoodboardOutDTO>(moodboard),
					MoodboardMatch = Enum.GetName(typeof(MoodboardMatch), i)
				};

				moodboardsMatch.Add(moodboardMatch);
			}

			return moodboardsMatch;
		}

		// Get moodboards with target style ID and with all rooms other than the target room ID
		public async Task<IEnumerable<MoodboardOutDTO>> GetMoodboardStyleFamilyAsync(int styleId, int roomId)
		{
			IEnumerable<Moodboard> moodboardFamily = await _unitOfWork.MoodboardRepository
				.GetMoodboardStyleFamilyAsync(styleId, roomId);

			return _mapper.Map<ICollection<MoodboardOutDTO>>(moodboardFamily);
		}
	}
}
