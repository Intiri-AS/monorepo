using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Payment;

namespace Intiri.API.Models
{
	public class EndUser : User
	{
		#region Constructors
		public EndUser()
		{
			CreatedProjects = new HashSet<Project.Project>();
			SendMoodboards = new HashSet<ShareMoodboard>();
			ReceivedMoodboards = new HashSet<ShareMoodboard>();
		}

		#endregion Constructors

		#region Properties

		public ICollection<Inspiration> Inspirations { get; set; }
		public ICollection<Project.Project> CreatedProjects { get; set; }
		public ICollection<ShareMoodboard> SendMoodboards { get; set; }
		public ICollection<ShareMoodboard> ReceivedMoodboards { get; set; }
		public ICollection<ConsultationPayment> ConsultationPayments { get; set; }

		#endregion Properties
	}
}
