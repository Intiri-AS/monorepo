namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerOutDTO : UserOutDTO
	{
		public ICollection<MoodboardOutDTO> CreatedMoodboards { get; set; }
	}
}
