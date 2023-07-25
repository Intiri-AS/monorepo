using Intiri.API.Models.IntiriColor;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ColorPaletteOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int Number { get; set; }
		public string MainColor { get; set; }
		public string ShadeColorLight { get; set; }
		public string ShadeColorMedium { get; set; }
		public string ShadeColorDark { get; set; }
        public ColorNCS MainColorData { get; set; }
        public ColorNCS ShadeColorLightData { get; set; }
        public ColorNCS ShadeColorMediumData { get; set; }
        public ColorNCS ShadeColorDarkData { get; set; }
    }
}
