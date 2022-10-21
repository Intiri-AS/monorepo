using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Material;
using System.ComponentModel.Design;

namespace Intiri.API.DataAccess.Repository
{
	public class DesignerRepository : RepositoryBase<Designer>, IDesignerRepository
	{
		#region Fields

		#endregion Fields

		#region Constructors
		public DesignerRepository(DataContext context) : base(context)
		{
		}

		#endregion Constructors
	}
}
