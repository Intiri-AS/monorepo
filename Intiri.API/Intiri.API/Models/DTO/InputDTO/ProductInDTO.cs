using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class ProductInDTO
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public int ProductTypeId { get; set; }

		[Required]
		public double Price { get; set; }

		[Required]
		public IFormFile ImageFile { get; set; }

		public int MaterialTypeId { get; set; }
		public string ColorHexValue { get; set; }
		public string Description { get; set; }
	}
}
