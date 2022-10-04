namespace Intiri.API.Models.Style
{
    public class Style
    {
        public Style()
        {
            StyleImages = new HashSet<StyleImage>();

		}

        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
		public string ImagePublicId { get; set; }
		public string Description { get; set; }
        public ICollection<StyleImage> StyleImages { get; set; }
    }
}
