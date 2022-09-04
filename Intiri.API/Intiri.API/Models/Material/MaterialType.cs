namespace Intiri.API.Models.Material
{
	public class MaterialType
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ICollection<Material> Materials { get; set; }
	}
}
