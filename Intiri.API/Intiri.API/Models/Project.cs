namespace Intiri.API.Models
{
	public class Project
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public int BudgetId { get; set; }

		public Room.Room Room { get; set; }
		public ICollection<Style.StyleImage> StyleImages { get; set; }
		public ColorPalette ColorPalette { get; set; }
		public RoomDetails RoomDetails { get; set; }
		public Moodboard Moodboard { get; set; }
	}
}
