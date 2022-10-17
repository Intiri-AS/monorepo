using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class DesignersController : BaseApiController
	{
		#region Fields

		#endregion Fields

		#region Constructors

		public DesignersController(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}

		#endregion Constructors
	}
}
