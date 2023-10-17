using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class SmsVerificationInDTO
    {
        public string CountryCode { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string VerificationCode { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
