using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO;

public class StripePaymentDTO
{
    [Required]
    public string Name { get; set; }

    [Required]
    public long Amount { get; set; }

    public DateTime PaymentDate { get; set; } = DateTime.UtcNow;

    public DateTime ExpirationDate { get; set; } = DateTime.UtcNow + TimeSpan.FromMinutes(5);

    public string Locale { get; set; }

    public int PayerId { get; set; }

    [Required]
    public int ReceiverId { get; set; }

    public int? MoodboardId { get; set; }

    [Required]
    public int NumberOfConsultations { get; set; }

    [Required]
    public string SuccessUrlPath { get; set; }

    public string CancelUrlPath { get; set; }

    public string ConsultationDetails { get; set; }
    public string Domain { get; set; }
}
