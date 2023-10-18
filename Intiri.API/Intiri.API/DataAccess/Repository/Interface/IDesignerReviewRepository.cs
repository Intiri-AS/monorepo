using Intiri.API.Models.Rating;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IDesignerReviewRepository : IRepositoryBase<DesignerReview>
    {
        Task<bool> IsDesingerAlreadyRatedByUserAsync(int endUserId, int designerId);
        Task<IEnumerable<DesignerReview>> GetAllReviewsByClientIdAsync(int endUserId);
    }
}
