namespace Intiri.API.Models.Style
{
    public class StyleImage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
		public string PublicId { get; set; }
        public Style Style { get; set; }
        public int StyleId { get; set; }
		public ICollection<Project.Project> Projects { get; set; }
    }
}
