using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardMatchInDTO
    {
        [Required]
        public int RoomId { get; set; }

        [Required]
        public ICollection<int> StyleImageIds { get; set; }

        [Required]
        public ICollection<int> ColorPaletteIds { get; set; }

    }
}
