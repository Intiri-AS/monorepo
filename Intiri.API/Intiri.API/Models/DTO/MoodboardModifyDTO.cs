namespace Intiri.API.Models.DTO
{
	public class MoodboardModifyDTO
	{
		public ICollection<int> MaterialIds { get; set; }
		public ICollection<int> ColorPaletteIds { get; set; }
		public ICollection<int> ProductIds { get; set; }
	}
}
