using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Rating;

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
	}
}
