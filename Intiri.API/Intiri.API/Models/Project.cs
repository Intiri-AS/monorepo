namespace Intiri.API.Models
{
	public class Project
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ICollection<Style.StyleImage> StyleImages { get; set; }
		public ColorPallete ColorPallete { get; set; }
		public Room.Room Room { get; set; }
		public int BudgetId { get; set; }
		public RoomDetails RoomDetails { get; set; }
		public int MoodboardId { get; set; }
	}
}
