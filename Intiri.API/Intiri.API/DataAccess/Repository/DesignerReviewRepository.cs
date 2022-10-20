using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Rating;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class DesignerReviewRepository : RepositoryBase<DesignerReview>, IDesignerReviewRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public DesignerReviewRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors

		public async Task<bool> IsDesingerAlreadyRatedByUserAsync(int endUserId, int designerId)
		{
			return await _context.DesignerReviews.AnyAsync(e => e.DesignerId == designerId && e.EndUser.Id == endUserId);
		}
	}
}
