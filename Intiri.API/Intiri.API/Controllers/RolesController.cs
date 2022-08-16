using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class RolesController : BaseApiController
	{
		#region ctors

		public RolesController(IUnitOfWork unitOfWork) : base(unitOfWork) { }

		#endregion ctors

		#region Public methods

		[HttpGet]
		public async Task<IActionResult> GetRoleNames()
		{
			IEnumerable<string> roleNames = await _unitOfWork.RoleRepository.GetRolesNames();
			return Ok(roleNames);
		}

		#endregion Public methods
	}
}
