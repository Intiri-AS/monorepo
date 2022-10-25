using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository
{
	public class InspirationRepository : RepositoryBase<Inspiration>, IInspirationRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public InspirationRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors
	}
}
