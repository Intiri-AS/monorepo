namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerClientFullOutDTO : DesignerClientOutDTO
	{
		public MoodboardOutDTO Moodboard { get; set; }
		public IEnumerable<InspirationOutDTO> ClientInspirations { get; set; }
	}
}
