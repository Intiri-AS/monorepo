namespace Intiri.API.Models.Payment;
using Intiri.API.Models.Moodboard;
using System.ComponentModel.DataAnnotations;

public class ConsultationPayment : PaymentBase
{
    public EndUser Payer { get; set; }

    public int PayerId { get; set; }

    public Designer Receiver { get; set; }

    public int ReceiverId { get; set; }

    public ClientMoodboard Moodboard { get; set; }

    public int? MoodboardId { get; set; }

    public ClientMoodboard MoodboardOffer { get; set; }

    public int? MoodboardOfferId { get; set; }

    [Required]
    public int NumberOfConsultations { get; set; }

    public string ConsultationDetails { get; set; }

	public DateTime PaymentDate { get; set; }

}
