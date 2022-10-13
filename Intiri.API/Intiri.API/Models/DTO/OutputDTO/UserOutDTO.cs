using Microsoft.AspNetCore.SignalR.Protocol;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class UserOutDTO
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Gender { get; set; }
		public string Email { get; set; }
		public string PhoneNumber { get; set; }
		public string PhotoPath { get; set; }
		public string Street { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string Country { get; set; }
		public string CountryCode { get; set; }

	}
}
