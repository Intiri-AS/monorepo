
using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class StyleImageInDTO
	{
		[Required]
		public int StyleId { get; set; }

        [Required]
        public int RoomId { get; set; }
        public string Provider { get; set; }

        public IFormFile ImageFile { get; set; }
	}
}
