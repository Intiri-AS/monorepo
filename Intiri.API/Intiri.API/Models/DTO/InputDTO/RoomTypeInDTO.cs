using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoomTypeInDTO
	{
		[Required]
		public string Name { get; set; }
	}
}
