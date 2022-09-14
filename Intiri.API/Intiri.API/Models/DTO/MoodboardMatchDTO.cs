using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Models.DTO
{
	public class MoodboardMatchDTO
	{
		public MoodboardOutDTO Moodboard { get; set; }
		public int PercentageMatch { get; set; }
	}
}
