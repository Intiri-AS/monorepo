using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoomDetailsInDTO
	{
		public string Shape { get; set; }

		//[Required]
		public double Size { get; set; } = 0;

		//[Required]
		public int BudgetRate { get; set; } = 0;

        public List<IFormFile> RoomSketchFile { get; set; }
	}
}
