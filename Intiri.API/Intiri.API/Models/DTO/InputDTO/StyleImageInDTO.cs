
using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class StyleImageInDTO
	{
		[Required]
		public int StyleId { get; set; }

		public IFormFile ImageFile { get; set; }
	}
}
