
namespace Intiri.API.Models
{
	public class Moodboard
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Designer { get; set; }
		public Style.Style Style { get; set; }
		public Room.Room Room { get; set; }
		public ICollection<Material.Material> Materials { get; set; }
		public ColorPallete ColorPallete { get; set; }
		public ICollection<Product.Product> Products { get; set; }
	}
}
