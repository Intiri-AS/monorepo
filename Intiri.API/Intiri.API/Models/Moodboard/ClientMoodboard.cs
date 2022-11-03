using Intiri.API.Models.Room;

namespace Intiri.API.Models.Moodboard
{
	public class ClientMoodboard : Moodboard
	{
		public Project.Project Project { get; set; }
		public int? ProjectId { get; set; }
		public RoomDetails RoomDetails { get; set; }
	}
}
