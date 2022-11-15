using Intiri.API.Models.Payment;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.Moodboard
{
	public class ClientMoodboard : Moodboard
	{
		public Project.Project Project { get; set; }
		public int? ProjectId { get; set; }
		public RoomDetails RoomDetails { get; set; }

		public ConsultationPayment ConsultationPaymentSend { get; set; }
		public ConsultationPayment ConsultationPaymentReceive { get; set; }
	}
}
