using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;

namespace Intiri.API.Models.DTO
{
	public class MoodboardSuggestionDTO
	{
		public IEnumerable<MoodboardMatchDTO> Moodboards { get; set; }
		public IEnumerable<MoodboardOutDTO> MoodboardFamily { get; set; }
	}
}
