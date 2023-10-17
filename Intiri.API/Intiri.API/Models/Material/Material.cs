using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;

namespace Intiri.API.Models.Material
{
    public class Material
    {
        public Material()
        {
            Moodboards = new HashSet<Moodboard.Moodboard>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string ImagePublicId { get; set; }
        public string Description { get; set; }
        public string Provider { get; set; }
        public string Link { get; set; }

        public int MaterialTypeId { get; set; }
        public MaterialType MaterialType { get; set; }
        public ICollection<Moodboard.Moodboard> Moodboards { get; set; }
    }
}
