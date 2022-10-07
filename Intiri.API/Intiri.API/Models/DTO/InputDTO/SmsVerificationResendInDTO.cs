using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class SmsVerificationResendInDTO
	{
		[Required]
		public string PhoneNumberFull { get; set; }
	}
}
