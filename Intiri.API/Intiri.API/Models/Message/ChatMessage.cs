using Microsoft.EntityFrameworkCore;

namespace Intiri.API.Models.ChatMessage;

//TODO: Are content and SentDate mandatory in db level? Maybe message later can contain only some attachments without content?
[Index(nameof(SenderId), nameof(RecipientId))]
public class ChatMessage
{
    public int Id { get; set; }

    public int SenderId { get; set; }

    public User Sender { get; set; }

    public int RecipientId { get; set; }

    public User Recipient { get; set; }

    public string Content { get; set; }

    public DateTime? DateRead { get; set; }

    public DateTime MessageSentDate { get; set; } = DateTime.UtcNow;

    public bool SenderDeleted { get; set; }

    public bool RecipientDeleted { get; set; }
}
