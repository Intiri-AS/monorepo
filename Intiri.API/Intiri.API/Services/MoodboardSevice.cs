using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Intiri.API.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Intiri.API.Extension;

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

		public KeyValuePair<int, int> findStyleWithMaxCounts (Dictionary<int, int> dict) {
			KeyValuePair<int, int> maxEntry = new KeyValuePair<int, int>();
			foreach (var entry in dict) {
				if (entry.Value > maxEntry.Value) {
					maxEntry = entry;
				}
			}
			return maxEntry;
		}
		public async Task<IEnumerable<MoodboardMatchDTO>> FindMoodboardMatchesAsync(MoodboardMatchInDTO matchInDTO)
		{
			IEnumerable<Moodboard> moodboardsByRoom =
				await _unitOfWork.MoodboardRepository.GetMoodboardsByRoomId(matchInDTO.RoomId);

			// Group styleImageIds with max, mid, min selected styles.
			ICollection<int> styleImageIds = matchInDTO.StyleImageIds;
			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(styleImageIds);
			styleImages = styleImages.ToList();

			List<int> styleImageStyleIds = new List<int>();
			foreach (StyleImage styleImage in styleImages) {
				styleImageStyleIds.Add(styleImage.StyleId);
			}

			Dictionary<int, int> freq = Utils.CountArrayElementsFrequency(styleImageStyleIds);

			KeyValuePair<int, int> highMatchStyle = new KeyValuePair<int, int>();
			KeyValuePair<int, int> mediumMatchStyle = new KeyValuePair<int, int>();
			KeyValuePair<int, int> lowMatchStyle = new KeyValuePair<int, int>();

			if (freq.Count > 0) {
				highMatchStyle = findStyleWithMaxCounts(freq);
				freq.Remove(highMatchStyle.Key);
			}
			if (freq.Count > 0) {
				mediumMatchStyle = findStyleWithMaxCounts(freq);
				freq.Remove(mediumMatchStyle.Key);
			}

			if (freq.Count > 0) {
				lowMatchStyle = findStyleWithMaxCounts(freq);
			}

			
			Dictionary<string, Moodboard> moodboardMatches = new Dictionary<string, Moodboard>();
			foreach (Moodboard moodboard in moodboardsByRoom)
			{
				if (moodboard.Style.Id == highMatchStyle.Key && !moodboardMatches.ContainsKey("High")) {
					moodboardMatches.Add("High", moodboard);
				} else if (moodboard.Style.Id == mediumMatchStyle.Key && !moodboardMatches.ContainsKey("Medium")) {
					moodboardMatches.Add("Medium", moodboard);
				} else if (moodboard.Style.Id == lowMatchStyle.Key && !moodboardMatches.ContainsKey("Low")) {
					moodboardMatches.Add("Low", moodboard);
				}
			}
			
			List<KeyValuePair<string, Moodboard>> moodboardMatchesList = moodboardMatches.ToList();

			if (moodboardMatchesList.Count == 0) {
				return null;
			}

			List<MoodboardMatchDTO> moodboardsMatch = new List<MoodboardMatchDTO>();

			for (int i = 0; i < moodboardMatchesList.Count; i++) {
				Moodboard moodboard = moodboardMatchesList[i].Value;
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

			var moodboardFamilyOut = _mapper.Map<ICollection<MoodboardOutDTO>>(moodboardFamily);

            return moodboardFamilyOut;
		}

		public async Task<ClientMoodboard> CreateClientMoodboardAsync(List<RoomDetails> roomDetails,  MoodboardInDTO moodboardIn, EndUser endUser)
		{
			Moodboard moodboard;
			ClientMoodboard newMoodboard;

			if (moodboardIn.Id > 0)
			{
				newMoodboard = await CloneMoodboardAsync(moodboardIn.Id, roomDetails, moodboardIn);
				newMoodboard.Designer = endUser;
			}
			else
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardIn.SourceMoodboardId);
				newMoodboard = _mapper.Map<ClientMoodboard>(moodboardIn);
				newMoodboard.SourceMoodboardId = moodboard.Id;
				newMoodboard.IsTemplate = false;
				_unitOfWork.MoodboardRepository.Insert(newMoodboard);

				foreach (var item in roomDetails)
				{
                    item.Moodboard = newMoodboard;
                }
				newMoodboard.Designer = endUser;

				Room mRoom = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardIn.RoomId);
				newMoodboard.Room = mRoom;
				Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(moodboardIn.StyleId);
				newMoodboard.Style = style;

				IEnumerable<ColorPalette> mColorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardIn.ColorPaletteIds);
				newMoodboard.ColorPalettes = mColorPalettes.ToArray();

				IEnumerable<Material> mMaterials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardIn.MaterialIds);
				newMoodboard.Materials = mMaterials.ToArray();

				IEnumerable<Product> mProducts = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardIn.ProductIds);
				newMoodboard.Products = mProducts.ToArray();

                IEnumerable<StyleImage> mstyleimage = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(moodboardIn.StyleImageIds);
                newMoodboard.StyleImages = mstyleimage.ToArray();
            }

			return newMoodboard;
		}

		public async Task<ClientMoodboard> CloneMoodboardAsync(int moodboardId, List<RoomDetails> roomDetails, MoodboardInDTO moodboardIn)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardId);
			ClientMoodboard clonedMoodboard = new(moodboard);
            clonedMoodboard.SlotInfo = moodboardIn.SlotInfo;
            clonedMoodboard.StyleImages = moodboard.StyleImages;

			// Need to update Materials, Products & Colors as well
			clonedMoodboard.Materials = moodboard.Materials.Where(material => moodboardIn.MaterialIds.Contains(material.Id)).ToHashSet();
			clonedMoodboard.Products = moodboard.Products.Where(product => moodboardIn.ProductIds.Contains(product.Id)).ToHashSet();
			clonedMoodboard.ColorPalettes = moodboard.ColorPalettes.Where(colorPalette => moodboardIn.ColorPaletteIds.Contains(colorPalette.Id)).ToHashSet();

            _unitOfWork.MoodboardRepository.Insert(clonedMoodboard);

            foreach (var item in roomDetails)
            {
                item.Moodboard = clonedMoodboard;
            }

            return clonedMoodboard;
		}
	}
}
