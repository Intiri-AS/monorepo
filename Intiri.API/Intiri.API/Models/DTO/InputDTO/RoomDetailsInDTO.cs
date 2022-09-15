using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoomDetailsInDTO
	{
		[Required]
		public string Shape { get; set; }

		[Required]
		public double Size { get; set; }

		[Required]
		public int ProjectId { get; set; }
	}
}
