namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProjectOut
	{
		public string Name { get; set; }
		public ICollection<int> StyleImageIds { get; set; }
		public int ColorPalleteId { get; set; }
		public int RoomId { get; set; }
		public int BudgetId { get; set; }
		public RoomDetailsOutDTO RoomDetails { get; set; }
		public int MoodboardId { get; set; }
	}
}
