using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class PartnerContactInDTO : RegisterInDTO
    {
        [Required]
        public int PartnerId { get; set; }
    }
}
