namespace Intiri.API.Models.DTO.OutputDTO.Style
{
    public class StyleImageOutDTO
    {
        public int Id { get; set; }

        public string ImagePath { get; set; }

        public int StyleId { get; set; }
        public string StyleName { get; set; }
        public int? RoomId { get; set; }
        public string Provider { get; set; }
    }
}
