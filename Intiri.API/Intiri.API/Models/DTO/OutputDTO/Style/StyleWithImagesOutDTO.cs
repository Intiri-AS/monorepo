namespace Intiri.API.Models.DTO.OutputDTO.Style
{
    public class StyleWithImagesOutDTO : StyleOutDTO
    {
        public ICollection<StyleImageOutDTO> StyleImages { get; set; }
    }
}
