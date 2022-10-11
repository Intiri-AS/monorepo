using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO
{
    public class ChatMessageInDTO
    {
        [Required]
        public int RecipientId { get; set; }

        [Required]
        public string Content { get; set; }

        public IEnumerable<IFormFile> Attachments { get; set; }
    }
}
