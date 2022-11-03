using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Payment;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.Moodboard
{
    public class Moodboard
    {
        public Moodboard()
        {
            Materials = new HashSet<Material.Material>();
			ColorPalettes = new HashSet<ColorPalette>();
			Products = new HashSet<Product.Product>();
		}

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public DateTime Updated { get; set; } = DateTime.UtcNow;
		public User Designer { get; set; }
        public int DesignerId { get; set; }
        public Style.Style Style { get; set; }
        public Room.Room Room { get; set; }
        public Moodboard SourceMoodboard { get; set; }
		public bool IsTemplate { get; set; }

        public ICollection<Material.Material> Materials { get; set; }
        public ICollection<ColorPalette> ColorPalettes { get; set; }
        public ICollection<Product.Product> Products { get; set; }
    }
}
