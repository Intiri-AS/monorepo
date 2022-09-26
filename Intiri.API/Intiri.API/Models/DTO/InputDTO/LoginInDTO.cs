using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class LoginInDTO
	{
		[Required]
		public string PhoneNumber { get; set; }
	}
}
