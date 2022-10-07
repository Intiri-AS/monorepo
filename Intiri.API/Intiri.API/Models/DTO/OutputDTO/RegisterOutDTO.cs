using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class RegisterOutDTO
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string PhoneNumberFull { get; set; }
	}
}
