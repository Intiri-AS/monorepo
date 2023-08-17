using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models;

namespace Intiri.API.Services.Interfaces
{
	public interface IMoodboardSevice
	{
		Task<IEnumerable<MoodboardMatchDTO>> FindMoodboardMatchesAsync(MoodboardMatchInDTO matchInDTO);
		Task<IEnumerable<MoodboardOutDTO>> GetMoodboardStyleFamilyAsync(int styleId, int roomId);
		Task<ClientMoodboard> CreateClientMoodboardAsync(List<RoomDetails> roomDetails, MoodboardInDTO moodboardIn, EndUser endUser);
	}
}
