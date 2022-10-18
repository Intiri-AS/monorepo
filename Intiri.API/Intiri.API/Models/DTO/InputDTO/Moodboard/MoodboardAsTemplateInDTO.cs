using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
	public class MoodboardAsTemplateInDTO
	{
		[Required]
		public int MoodboardId { get; set; }
		[Required]
		public bool IsTemplate { get; set; }
	}
}
