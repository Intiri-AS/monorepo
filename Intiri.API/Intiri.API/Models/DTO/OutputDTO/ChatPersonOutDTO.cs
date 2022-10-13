namespace Intiri.API.Models.DTO.OutputDTO;

public class ChatPersonOutDTO
{
    public int Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string PhotoPath { get; set; }

    public DateTime LastMessageDate { get; set; }

    public string LastMessageContent { get; set; }

    public DateTime LastSentMessageDate { get; set; }

    public string LastSentMessageContent { get; set; }

    public DateTime LastReceivedMessageDate { get; set; }

    public string LastReceivedMessageContent { get; set; }

    public bool ChatPeriodExpired { get; set; }
}