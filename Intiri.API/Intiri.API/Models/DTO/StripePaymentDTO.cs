using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO;

public class StripePaymentDTO
{
    [Required]
    public string Name { get; set; }

    [Required]
    public long Amount { get; set; }

    public DateTime ExpirationDate { get; set; } = DateTime.UtcNow + TimeSpan.FromDays(3);

    public string Locale { get; set; }

    public int PayerId { get; set; }

    [Required]
    public int ReceiverId { get; set; }

    [Required]
    public string SuccessUrlPath { get; set; }

    public string CancelUrlPath { get; set; }
}
