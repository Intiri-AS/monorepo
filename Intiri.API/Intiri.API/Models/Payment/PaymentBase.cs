using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models.Payment;

public class PaymentBase
{
    public int Id { get; set; }

    [Required]
    public long Amount { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime ExpirationDate { get; set; } = DateTime.MaxValue;

    [NotMapped]
    public bool IsExpired
    {
        get
        {
            return ExpirationDate < DateTime.UtcNow;
        }
    }
}
