using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models.Payment;

public class PaymentBase
{
    public int Id { get; set; }

    [Required]
    public long Amount { get; set; }

    public string Name { get; set; }

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
