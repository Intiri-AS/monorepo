using Intiri.API.Models.Style;

namespace Intiri.API.Models.DTO.OutputDTO.Style
{
    public class StyleOutDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public string Description { get; set; }
		public ICollection<StyleImageOutDTO> StyleImages { get; set; }
	}
}
