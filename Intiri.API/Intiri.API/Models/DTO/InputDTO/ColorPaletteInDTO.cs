using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class ColorPaletteInDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int Number { get; set; }

        [Required]
        public string MainColor { get; set; }

        [Required]
        public string ShadeColorLight { get; set; }

        [Required]
        public string ShadeColorMedium { get; set; }

        [Required]
        public string ShadeColorDark { get; set; }
    }
}
