
using Intiri.API.Models.Style;

namespace Intiri.API.Models.Room
{
	public class Room
	{
		public Room()
		{
			StyleImages = new HashSet<StyleImage>();
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public string IconPath { get; set; }
		public string IconPublicId { get; set; }
		public string Description { get; set; }
		public RoomType RoomType { get; set; }
		public int RoomTypeId { get; set; }
		public ICollection<StyleImage> StyleImages { get; set; }
	}
}
