using System.ComponentModel.DataAnnotations;
using Intiri.API.Models.DTO.InputDTO.Moodboard;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class ProjectInDTO
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public int RoomId { get; set; }

		[Required]
		public RoomDetailsInDTO RoomDetails { get; set; }

		[Required]
		public ICollection<int> StyleImageIds { get; set; }

		[Required]
		public ICollection<int> ColorPaletteIds { get; set; }

		[Required]
		public MoodboardInDTO Moodboard { get; set; }
	}
}
