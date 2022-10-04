using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.Vipps
{
    public class VippsAccessTokenRequestDTO
    {
        [Required]
        public string AuthorizationCode { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Scope { get; set; }

        [Required]
        public string RedirectUri { get; set; }
    }
}
