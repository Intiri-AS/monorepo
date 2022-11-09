using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Services.Interfaces
{
	public interface IMoodboardSevice
	{
		Task<IEnumerable<MoodboardMatchDTO>> FindMoodboardMatchesAsync(MoodboardMatchInDTO matchInDTO);
		Task<IEnumerable<MoodboardOutDTO>> GetMoodboardStyleFamilyAsync(int styleId, int roomId);
	}
}
