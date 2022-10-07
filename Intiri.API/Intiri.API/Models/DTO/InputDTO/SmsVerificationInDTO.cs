using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class SmsVerificationInDTO
	{
		[Required]
		public string PhoneNumberFull { get; set; }

		[Required]
		public string VerificationCode { get; set; }

		public string FirstName { get; set; }
		public string LastName { get; set; }
	}
}
