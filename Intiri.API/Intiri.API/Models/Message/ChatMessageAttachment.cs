using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.ChatMessage;

public class ChatMessageAttachment
{
    public int Id { get; set; }

    [Required]
    public string Url { get; set; }

    [Required]
    public string FileFormat { get; set; }

    [Required]
    public string PublicId { get; set; }

    public int ChatMessageId { get; set; }

    public ChatMessage ChatMessage { get; set; }
}

