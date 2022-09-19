using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProjectOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int BudgetId { get; set; }
		public ICollection<StyleImageOutDTO> StyleImages { get; set; }
		public ColorPalleteOutDTO ColorPallete { get; set; }
		public RoomOutDTO Room { get; set; }
		public RoomDetailsOutDTO RoomDetails { get; set; }
		public MoodboardOutDTO Moodboard { get; set; }
	}
}
