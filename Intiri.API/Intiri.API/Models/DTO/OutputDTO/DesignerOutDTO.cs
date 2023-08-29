using Intiri.API.Models.DTO.OutputDTO.DesignerRating;
using Intiri.API.Models.Rating;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class DesignerOutDTO : UserOutDTO
	{
		public string Language { get; set; }
		public RatingBasicOutDTO DesignerRating { get; set; }
		public ICollection<RoleDTO> Roles { get; set; }
		public ICollection<MoodboardOutDTO> CreatedMoodboards { get; set; }
        public DesignerInfo DesignerInfo { get; set; }
        public ICollection<DesignerPortfolio> DesignerPortfolio { get; set; }
    }
}
