using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO
{
    public class ColorDTO
    {
        public string Name { get; set; }

        [Required]
        public string HexValue { get; set; }
    }
}
