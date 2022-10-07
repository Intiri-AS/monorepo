namespace Intiri.API.Models.Style
{
    public class StyleImage
    {
        public StyleImage()
        {
            Projects = new HashSet<Project.Project>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
		public string PublicId { get; set; }
        public Style Style { get; set; }
        public int StyleId { get; set; }
		public ICollection<Project.Project> Projects { get; set; }
    }
}
