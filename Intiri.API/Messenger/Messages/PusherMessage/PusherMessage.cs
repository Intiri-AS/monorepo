namespace Messenger.Messages;

public class PusherMessage : Message
{
    public string Content { get; set; }

    public DateTime MessageSentDate { get; set; }

    public int SenderId { get; set; }

    public int RecipientId { get; set; }

    public IEnumerable<PusherMessageAttachment> MessageAttachments { get; set; }
}