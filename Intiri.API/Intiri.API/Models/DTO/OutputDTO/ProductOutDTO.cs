using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProductOutDTO
	{
		public string Name { get; set; }
		public ProductTypeOutDTO ProductType { get; set; }
		public double Price { get; set; }
		public string ImagePath { get; set; }
		public Material.MaterialTypeOutDTO MaterialType { get; set; }
		public string ColorHexValue { get; set; }
		public string Description { get; set; }
	}
}
