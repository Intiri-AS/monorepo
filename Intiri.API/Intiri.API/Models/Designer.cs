using Intiri.API.Models.Payment;
using Intiri.API.Models.UserLanguage;

namespace Intiri.API.Models
{
	public class Designer : User
	{
		#region Constructors

		public Designer()
		{
			CreatedMoodboards = new HashSet<Moodboard.Moodboard>();
		}

		#endregion Constructors

		#region Properties

		public string Language { get; set; }
		public ICollection<Moodboard.Moodboard> CreatedMoodboards { get; set; }
		public ICollection<ConsultationPayment> ConsultationPaymentsReceived { get; set; }

		#endregion Properties
	}
}
