using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Room;

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
        public Room.Room Room { get; set; }
        public int? RoomId { get; set; }
        public string Provider { get; set; }
        public ICollection<Project.Project> Projects { get; set; }
        public ICollection<Moodboard.Moodboard> Moodboards { get; set; }
    }
}
