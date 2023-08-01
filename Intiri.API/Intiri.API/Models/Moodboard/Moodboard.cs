using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Payment;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using System.Xml.Linq;

namespace Intiri.API.Models.Moodboard
{
    public class Moodboard
    {
		#region Constructors

		#endregion Constructors
		public Moodboard()
        {
            Materials = new HashSet<Material.Material>();
			ColorPalettes = new HashSet<ColorPalette>();
			Products = new HashSet<Product.Product>();
			StyleImages = new HashSet<StyleImage>();
		}

        public Moodboard(Moodboard moodboard)
        {
			Name = moodboard.Name;
			Description = moodboard.Description;
			Created = DateTime.UtcNow;
			Updated = DateTime.UtcNow;
			Style = moodboard.Style;
			Room = moodboard.Room;
			SourceMoodboardId = moodboard.Id;
			IsTemplate = false;
			Materials = moodboard.Materials;
			ColorPalettes = moodboard.ColorPalettes;
			Products = moodboard.Products;
		}

		#region Properties

		public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public DateTime Updated { get; set; } = DateTime.UtcNow;
		public User Designer { get; set; }
        public int DesignerId { get; set; }
        public Style.Style Style { get; set; }
        public Room.Room Room { get; set; }
        public int? SourceMoodboardId { get; set; }
        public bool IsTemplate { get; set; }
        public string SlotInfo { get; set; }
        public ICollection<Material.Material> Materials { get; set; }
        public ICollection<ColorPalette> ColorPalettes { get; set; }
        public ICollection<Product.Product> Products { get; set; }
		public ICollection<StyleImage> StyleImages { get; set; }

		#endregion Properties
	}
}
