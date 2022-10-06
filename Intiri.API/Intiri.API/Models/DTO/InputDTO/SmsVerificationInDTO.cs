using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class SmsVerificationInDTO
	{
		[Required]
		public string PhoneNumber { get; set; }
		public string VerificationCode { get; set; }
	}
}
