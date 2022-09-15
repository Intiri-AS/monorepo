namespace Intiri.API.Models.Product
{
	public class Product
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public double Price { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }

		public int StyleId { get; set; }
		public Style.Style Style { get; set; }
		public int ProductTypeId { get; set; }
		public ProductType ProductType { get; set; }
		public ICollection<Moodboard> Moodboards { get; set; }
	}
}
