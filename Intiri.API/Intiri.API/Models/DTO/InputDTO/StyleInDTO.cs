using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class StyleInDTO
    {
        [Required]
        public string Name { get; set; }

        public IFormFile ImageFile { get; set; }

        public string Description { get; set; }
    }
}
