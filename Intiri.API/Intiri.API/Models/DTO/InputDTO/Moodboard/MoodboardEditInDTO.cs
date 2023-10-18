using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardEditInDTO
    {
        [Required]
        public int MoodboardId { get; set; }

        [Required]
        public int StyleId { get; set; }

        [Required]
        public int RoomId { get; set; }

        [Required]
        public string SlotInfo { get; set; }

        [Required]
        public ICollection<int> MaterialIds { get; set; }

        [Required]
        public ICollection<int> ColorPaletteIds { get; set; }

        [Required]
        public ICollection<int> ProductIds { get; set; }

        [Required]
        public ICollection<int> StyleImageIds { get; set; }
    }
}
