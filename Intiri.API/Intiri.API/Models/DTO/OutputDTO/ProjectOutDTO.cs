using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.DTO.OutputDTO
{
    public class ProjectOutDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Created { get; set; }
        public RoomOutDTO Room { get; set; }

        public ICollection<ColorPaletteOutDTO> ColorPalettes { get; set; }
        public ICollection<StyleImageOutDTO> StyleImages { get; set; }
        public ICollection<MoodboardOutDTO> ProjectMoodboards { get; set; }
    }
}
