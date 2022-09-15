using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProjectOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ICollection<StyleImageOutDTO> StyleImages { get; set; }
		public ColorPalleteOutDTO ColorPallete { get; set; }
		public RoomOutDTO Room { get; set; }
		public int BudgetId { get; set; }
		public RoomDetailsOutDTO RoomDetails { get; set; }
		public int MoodboardId { get; set; }
	}
}
