using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.Payment;
using Intiri.API.Models.Rating;
using Intiri.API.Models.UserLanguage;

namespace Intiri.API.Models
{
    public class Designer : User
    {
        #region Constructors

        public Designer()
        {
            CreatedMoodboards = new HashSet<Moodboard.Moodboard>();
            DesignerReviews = new HashSet<DesignerReview>();
        }

        #endregion Constructors

        #region Properties
        public string Language { get; set; }
        public DesignerRating DesignerRating { get; set; }
        public ICollection<DesignerReview> DesignerReviews { get; set; }
        public ICollection<ConsultationPayment> ConsultationPaymentsReceived { get; set; }
        public DesignerInfo DesignerInfo { get; set; }
        public ICollection<DesignerPortfolio> DesignerPortfolio { get; set; }
        #endregion Properties
    }
}
