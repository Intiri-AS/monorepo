using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoomDetailsInDTO
	{
		public string Shape { get; set; }

		[Required]
		public double Size { get; set; }

		[Required]
		public int BudgetRate { get; set; }

		public IFormFile RoomSketchFile { get; set; }
	}
}
