namespace Intiri.API.Models.DTO
{
	public class MoodboardModifyDTO
	{
		public ICollection<int> MaterialIds { get; set; }
		public ICollection<int> ColorPalleteIds { get; set; }
		public ICollection<int> ProductIds { get; set; }
	}
}
