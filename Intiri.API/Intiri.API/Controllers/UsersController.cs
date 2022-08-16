using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class UsersController : BaseApiController
	{
		#region ctors

		public UsersController(IUnitOfWork unitOfWork) : base(unitOfWork) { }

		#endregion ctors

		#region Public methods

		[HttpGet]
		public IActionResult Test()
		{

			return Ok("Test successful");
		}

		#endregion Public methods
	}
}
