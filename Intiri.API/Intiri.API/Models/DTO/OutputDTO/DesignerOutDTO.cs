namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerOutDTO : UserOutDTO
	{
		public string Language { get; set; }
		public ICollection<RoleDTO> Roles { get; set; }
		public ICollection<MoodboardOutDTO> CreatedMoodboards { get; set; }
	}
}
