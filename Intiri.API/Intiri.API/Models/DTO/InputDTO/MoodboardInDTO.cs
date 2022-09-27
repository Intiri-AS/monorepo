namespace Intiri.API.Models.DTO.InputDTO
{
	public class MoodboardInDTO
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public int DesignerId { get; set; }
		public int StyleId { get; set; }
		public int RoomId { get; set; }
		public bool IsTemplate { get; set; }

		public ICollection<int> MaterialIds { get; set; }
		public ICollection<int> ColorPaletteIds { get; set; }
		public ICollection<int> ProductIds { get; set; }
	}
}
