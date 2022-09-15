namespace Intiri.API.Models.DTO.InputDTO
{
	public class MoodboardInDTO
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public string Designer { get; set; }
		public int StyleId { get; set; }
		public int RoomId { get; set; }

		public ICollection<int> MaterialIds { get; set; }
		public ICollection<int> ColorPalleteIds { get; set; }
		public ICollection<int> ProductIds { get; set; }
	}
}
