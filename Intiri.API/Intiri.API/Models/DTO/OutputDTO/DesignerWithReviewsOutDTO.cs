using Intiri.API.Models.DTO.OutputDTO.DesignerRating;
using Intiri.API.Models.Rating;

namespace Intiri.API.Models.DTO.OutputDTO
{
    public class DesignerWithReviewsOutDTO : UserOutDTO
    {
        public string Language { get; set; }
        public ICollection<RatingWithCommentOutDTO> DesignerReviews { get; set; }
        public ICollection<RoleDTO> Roles { get; set; }
        public ICollection<MoodboardOutDTO> CreatedMoodboards { get; set; }
    }
}
