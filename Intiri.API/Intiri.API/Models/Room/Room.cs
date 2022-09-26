
namespace Intiri.API.Models.Room
{
	public class Room
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string ImagePath { get; set; }
		public string ImagePublicId { get; set; }
		public string Description { get; set; }
		public RoomType RoomType { get; set; }
		public int RoomTypeId { get; set; }
	}
}
