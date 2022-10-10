using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class SmsVerificationResendInDTO
	{
		[Required]
		public string CountryCode { get; set; }
		public string PhoneNumber { get; set; }
	}
}
