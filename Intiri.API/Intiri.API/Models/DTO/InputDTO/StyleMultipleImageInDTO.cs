using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class StyleMultipleImageInDTO
    {
        [Required]
        public int StyleId { get; set; }

        [Required]
        public int RoomId { get; set; }
        public string Provider { get; set; }

        public List<IFormFile> ImageFile { get; set; }
    }
}
