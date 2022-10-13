using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class DesignerInDTO : RegisterInDTO
    {
        [Required]
        public float HourlyRate { get; set; }
        [Required]
        public int Style { get; set; }

        public string Role { get; set; }
    }
}
