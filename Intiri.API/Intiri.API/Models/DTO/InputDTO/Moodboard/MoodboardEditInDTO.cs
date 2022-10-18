namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardEditInDTO
    {
        public int MoodboardId { get; set; }
        public ICollection<int> MaterialIds { get; set; }
        public ICollection<int> ColorPaletteIds { get; set; }
        public ICollection<int> ProductIds { get; set; }
    }
}
