namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardInDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SourceMoodboardId { get; set; }
        public string Description { get; set; }
        public int DesignerId { get; set; }
        public int StyleId { get; set; }
        public int RoomId { get; set; }
        public bool IsTemplate { get; set; }

        public ICollection<int> MaterialIds { get; set; }
        public ICollection<int> ColorPaletteIds { get; set; }
        public ICollection<int> ProductIds { get; set; }
    }
}
