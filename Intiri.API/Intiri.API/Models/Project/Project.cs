using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.Project
{
    public class Project
    {
        public Project()
        {
            ColorPalettes = new HashSet<ColorPalette>();
			StyleImages = new HashSet<Style.StyleImage>();
            ProjectMoodboards = new HashSet<Moodboard.Moodboard>();
		}

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;
        public EndUser EndUser { get; set; }
        public int EndUserId { get; set; }
        public Room.Room Room { get; set; }
		public ICollection<ColorPalette> ColorPalettes { get; set; }
        public ICollection<Style.StyleImage> StyleImages { get; set; }
        public ICollection<Moodboard.Moodboard> ProjectMoodboards { get; set; }
    }
}
