using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class ForgotPasswordInDTO
    {
        [Required]
        public string PhoneNumber { get; set; }
    }
}
