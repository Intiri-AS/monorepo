using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerClientOutDTO
	{
		public int ConsultationId { get; set; }
		public int ClientId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string CountryCode { get; set; }
		public string PhoneNumber { get; set; }
		public string PhotoPath { get; set; }

		public bool IsExpired { get; set; }
		public int? MoodboardId { get; set; }
		public int? MoodboardOfferId { get; set; }
		public string MoodboardStyle { get; set; }

	}
}
