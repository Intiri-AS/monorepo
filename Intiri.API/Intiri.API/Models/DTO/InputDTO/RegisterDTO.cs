using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class RegisterDTO
	{
		[Required]
		public string Username { get; set; }
		
		[Required]
		public string PhoneNumber { get; set; }

		[Required]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[DataType(DataType.Password)]
		[Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
		public string ConfirmPassword { get; set; }
	}
}
