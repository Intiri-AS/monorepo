using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO.Moodboard
{
    public class MoodboardToProjectInDTO
    {
        [Required]
        public int ProjectId { get; set; }

		#region Moodboard

		[Required]
		public MoodboardInDTO Moodboard { get; set; }

		#endregion Moodboard

		#region RoomDetails

		[Required]
		public RoomDetailsInDTO RoomDetails { get; set; }

		#endregion RoomDetails
	}
}
