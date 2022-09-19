namespace Intiri.API.Models
{
	public class ColorPalette
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int Number { get; set; }
		public string MainColor { get; set; }
		public string ShadeColorLight { get; set; }
		public string ShadeColorMedium { get; set; }
		public string ShadeColorDark { get; set; }

		public ICollection<Moodboard> Moodboards { get; set; }
	}
}
