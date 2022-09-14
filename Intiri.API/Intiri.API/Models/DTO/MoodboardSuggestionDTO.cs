using Intiri.API.Models.DTO.OutputDTO.Room;

namespace Intiri.API.Models.DTO
{
	public class MoodboardSuggestionDTO
	{
		public IEnumerable<MoodboardMatchDTO> Moodboards { get; set; }
		public IEnumerable<RoomOutDTO> Rooms { get; set; }
	}
}
