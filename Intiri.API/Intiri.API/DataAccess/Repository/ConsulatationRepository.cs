using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository
{
	public class ConsulatationRepository : RepositoryBase<Consultation>, IConsulatationRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public ConsulatationRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors
	}
}
