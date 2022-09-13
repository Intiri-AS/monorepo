namespace Intiri.API.Models.Product
{
	public class Product
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ProductType ProductType { get; set; }
		public double Price { get; set; }
		public string ImagePath { get; set; }
		public Material.MaterialType MaterialType { get; set; }
		public string ColorHexValue { get; set; }
		public string Description { get; set; }
	}
}
