using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class moodboardStyleFamily
    {
        [Required]
        public int roomId { get; set; }

        [Required]
        public int styleId { get; set; }

        [Required]
        public ICollection<int> ColorPaletteIds { get; set; }
    }
}
