namespace Intiri.API.Models.Payment;

public class ConsultationPayment : PaymentBase
{
    public EndUser Payer { get; set; }

    public int PayerId { get; set; }

    public Designer Receiver { get; set; }

    public int ReceiverId { get; set; }
}
