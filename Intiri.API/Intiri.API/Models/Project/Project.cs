using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.Project
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;
        public User EndUser { get; set; }
        public int EndUserId { get; set; }
        public int BudgetRate { get; set; }
        public Room.Room Room { get; set; }
		public RoomDetails RoomDetails { get; set; }
		public ICollection<ColorPalette> ColorPalettes { get; set; }
        public ICollection<Style.StyleImage> StyleImages { get; set; }
        public ICollection<Moodboard.Moodboard> ProjectMoodboards { get; set; }
    }
}
