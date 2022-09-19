using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;

namespace Intiri.API.Models.DTO
{
	public class MoodboardSuggestionDTO
	{
		public ICollection<MoodboardMatchDTO> Moodboards { get; set; }
		public ICollection<MoodboardOutDTO> MoodboardFamily { get; set; }
	}
}
