namespace Intiri.API.Models.Product
{
    public class Product
	{
		public Product()
		{
			Moodboards = new HashSet<Moodboard.Moodboard>();
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public double Price { get; set; }
		public string Color { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public string ImagePublicId { get; set; }
		public Partner Partner { get; set; }
		public int PartnerId { get; set; }

		public int StyleId { get; set; }
		public Style.Style Style { get; set; }
		public ProductType ProductType { get; set; }
		public ICollection<Moodboard.Moodboard> Moodboards { get; set; }
	}
}
