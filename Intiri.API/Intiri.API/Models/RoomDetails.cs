using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models
{
	public class RoomDetails
	{
		public int Id { get; set; }
		public string Shape { get; set; }
		public double Size { get; set; }

		public int ProjectId { get; set; }
		public Project Project { get; set; }
	}
}
