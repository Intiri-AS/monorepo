using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProductOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public double Price { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public ProductTypeOutDTO ProductType { get; set; }
	}
}
