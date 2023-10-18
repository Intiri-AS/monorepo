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
        //public RoomDetailsInDTO RoomDetails { get; set; }
        public ICollection<IFormFile> roomSketchFile { get; set; }

        #endregion RoomDetails

        #region Moodboard

        [Required]
        public MoodboardInDTO Moodboard { get; set; }

        #endregion Moodboard
    }
}
