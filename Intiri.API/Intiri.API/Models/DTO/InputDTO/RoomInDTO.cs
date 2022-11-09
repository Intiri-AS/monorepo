using Intiri.API.Models.Room;
using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RoomInDTO
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public int RoomTypeId { get; set; }

		public IFormFile ImageFile { get; set; }

		public string Description { get; set; }
	}
}
