namespace Intiri.API.Models.Product
{
	public class Product
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public double Price { get; set; }
		public ProductType Type { get; set; }
		//public Style.Style Style { get; set; }
		//public ICollection<Moodboard> MoodboardList { get; set; }
	}
}
