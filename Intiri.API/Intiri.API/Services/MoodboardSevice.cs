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

			if (moodboardTopMatchOrder.Count == 0)
			{
				return null;
			}

			// take first two with high match
			List<KeyValuePair<Moodboard, int>> moodboardTopMatch = moodboardTopMatchOrder.Take(2).ToList();
			
			// take last with the lowest match
			if (moodboardTopMatchOrder.Count > 2)
			{
				moodboardTopMatch.Add(moodboardTopMatchOrder.Last());
			}

			List<MoodboardMatchDTO> moodboardsMatch = new List<MoodboardMatchDTO>();

			for (int i = 0; i < moodboardTopMatch.Count; i++)
			{
				Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardTopMatch[i].Key.Id);
                
                MoodboardMatchDTO moodboardMatch = new()
				{
					Moodboard = _mapper.Map<MoodboardOutDTO>(moodboard),
					MoodboardMatch = Enum.GetName(typeof(MoodboardMatch), i)
				};

                moodboardMatch.Moodboard.ColorPalettes = await _unitOfWork.ColorPaletteRepository.UpdateColorPalettesWithNCSAsync(moodboardMatch.Moodboard.ColorPalettes);
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
			foreach (var item in moodboardFamilyOut)
			{
                item.ColorPalettes = await _unitOfWork.ColorPaletteRepository.UpdateColorPalettesWithNCSAsync(item.ColorPalettes);
            }

            return moodboardFamilyOut;
		}

		public async Task<ClientMoodboard> CreateClientMoodboardAsync(List<RoomDetails> roomDetails,  MoodboardInDTO moodboardIn, EndUser endUser)
		{
			Moodboard moodboard;
			ClientMoodboard newMoodboard;

			if (moodboardIn.Id > 0)
			{
				newMoodboard = await CloneMoodboardAsync(moodboardIn.Id, roomDetails);
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
			}

			return newMoodboard;
		}

		public async Task<ClientMoodboard> CloneMoodboardAsync(int moodboardId, List<RoomDetails> roomDetails)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardId);
			ClientMoodboard clonedMoodboard = new(moodboard);

			_unitOfWork.MoodboardRepository.Insert(clonedMoodboard);

            foreach (var item in roomDetails)
            {
                item.Moodboard = clonedMoodboard;
            }

            return clonedMoodboard;
		}
	}
}
