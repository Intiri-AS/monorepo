using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class MaterialTypeInDTO
    {
        [Required]
        public string Name { get; set; }
    }
}
