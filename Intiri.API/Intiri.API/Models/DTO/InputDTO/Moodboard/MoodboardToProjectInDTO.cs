using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardToProjectInDTO
    {
        [Required]
        public int ProjectId { get; set; }

		[Required]
		public MoodboardInDTO Moodboard { get; set; }
		
		public RoomDetailsInDTO RoomDetails { get; set; }
    }
}
