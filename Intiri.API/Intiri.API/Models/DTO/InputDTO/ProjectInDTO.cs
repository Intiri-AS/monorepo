using System.ComponentModel.DataAnnotations;
using Intiri.API.Models.DTO.InputDTO.Moodboard;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class ProjectInDTO
	{
		[Required]
		public string ProjectName { get; set; }

		[Required]
		public int ProjectRoomId { get; set; }

		[Required]
		public ICollection<int> StyleImageIds { get; set; }

		[Required]
		public ICollection<int> ProjectColorPaletteIds { get; set; }

		#region RoomDetails

		//[Required]
		//public RoomDetailsInDTO RoomDetails { get; set; }

		public string Shape { get; set; }

		[Required]
		public double Size { get; set; }

		[Required]
		public int BudgetRate { get; set; }

		public IFormFile RoomSketchFile { get; set; }

		#endregion RoomDetails

		#region Moodboard

		//[Required]
		//public MoodboardInDTO Moodboard { get; set; }

		public int Id { get; set; }
		public string Name { get; set; }
		public int SourceMoodboardId { get; set; }
		public string Description { get; set; }
		public int DesignerId { get; set; }
		public int StyleId { get; set; }
		public int RoomId { get; set; }
		public bool IsTemplate { get; set; }

		public ICollection<int> MaterialIds { get; set; }
		public ICollection<int> ColorPaletteIds { get; set; }
		public ICollection<int> ProductIds { get; set; }

		#endregion Moodboard
	}
}
