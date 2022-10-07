using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class MoodboardMatchInDTO
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public int RoomId { get; set; }

		[Required]
		public int BudgetRate { get; set; }

		[Required]
		public RoomDetailsInDTO RoomDetails { get; set; }

		[Required]
		public ICollection<int> StyleImageIds { get; set; }

		[Required]
		public ICollection<int> ColorPaletteIds { get; set; }

	}
}
