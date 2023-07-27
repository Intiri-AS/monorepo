using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class MoodboardOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool IsTemplate { get; set; }
		public UserOutDTO Designer { get; set; }
		public DateTime Created { get; set; }
		public DateTime Updated { get; set; }
		public StyleOutDTO Style { get; set; }
		public RoomOutDTO Room { get; set; }
		public RoomDetailsOutDTO RoomDetails { get; set; }
        public string SlotInfo { get; set; }
        public ICollection<MaterialOutDTO> Materials { get; set; }
		public ICollection<ColorPaletteOutDTO> ColorPalettes { get; set; }
		public ICollection<ProductOutDTO> Products { get; set; }
	}
}
