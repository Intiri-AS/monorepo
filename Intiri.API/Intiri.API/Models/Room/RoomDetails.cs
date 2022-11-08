using Intiri.API.Models.Moodboard;
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
        public int BudgetRate { get; set; }

        //public Moodboard.Moodboard Moodboard { get; set; }
        public ClientMoodboard Moodboard { get; set; }
        public int MoodboardId { get; set; }
    }
}
