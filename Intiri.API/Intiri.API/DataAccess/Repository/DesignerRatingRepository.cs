using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Rating;

namespace Intiri.API.DataAccess.Repository
{
    public class DesignerRatingRepository
        : RepositoryBase<DesignerRating>,
            IDesignerRatingRepository
    {
        #region Fields

        #endregion Fields

        #region Constructors
        public DesignerRatingRepository(DataContext context)
            : base(context) { }

        #endregion Constructors

        public async Task<bool> RateDisagner()
        {
            return true;
        }
    }
}
