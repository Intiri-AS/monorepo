using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models.Room
{
    public class RoomDetails
    {
        public int Id { get; set; }
        public string Shape { get; set; }
        public double Size { get; set; }
		public string SketchUrl { get; set; }
		public string SketchPublicId { get; set; }
	}
}
