namespace Intiri.API.Models
{
	public class PendingSmsVerification
	{
		public string PhoneNumber { get; set; }
		public string VerificationCode { get; set; }
		public DateTime? DateCreated { get; set; }
	}
}
