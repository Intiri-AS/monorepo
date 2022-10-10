namespace Intiri.API.Models.DTO.OutputDTO
{
    public class ChatMessageOutDTO
    {
        public string Content { get; set; }

        public DateTime MessageSentDate { get; set; }

        public int SenderId { get; set; }
    }
}
