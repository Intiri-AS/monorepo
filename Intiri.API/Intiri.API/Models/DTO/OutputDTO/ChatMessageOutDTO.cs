namespace Intiri.API.Models.DTO.OutputDTO;

public class ChatMessageOutDTO
{
    public int Id { get; set; }

    public int SenderId { get; set; }

    public int RecipientId { get; set; }

    public string Content { get; set; }

    public DateTime? DateRead { get; set; }

    public DateTime MessageSentDate { get; set; }

    public IEnumerable<ChatMessageAttachmentOutDTO> Attachments { get; set; }
}