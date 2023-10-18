using Intiri.API.Models.Project;

namespace Intiri.API.Models.IntiriColor
{
    public class ColorPalette
    {
        public ColorPalette()
        {
            Moodboards = new HashSet<Moodboard.Moodboard>();
            Projects = new HashSet<Project.Project>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Number { get; set; }
        public string MainColor { get; set; }
        public string ShadeColorLight { get; set; }
        public string ShadeColorMedium { get; set; }
        public string ShadeColorDark { get; set; }

        public ICollection<Moodboard.Moodboard> Moodboards { get; set; }
        public ICollection<Project.Project> Projects { get; set; }
    }
}
