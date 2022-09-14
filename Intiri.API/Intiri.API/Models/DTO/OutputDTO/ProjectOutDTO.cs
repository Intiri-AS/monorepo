using Intiri.API.Models.DTO.OutputDTO.Room;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProjectOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ICollection<int> StyleImageIds { get; set; }
		public int ColorPalleteId { get; set; }
		public RoomOutDTO Room { get; set; }
		public int BudgetId { get; set; }
		public RoomDetailsOutDTO RoomDetails { get; set; }
		public int MoodboardId { get; set; }
	}
}
