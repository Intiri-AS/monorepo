using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.PolicyNames;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
	public class RolesController : BaseApiController
	{
		#region Fields

		private readonly ILogger<UsersController> _logger;

		#endregion Fields

		#region ctors

		public RolesController(IUnitOfWork unitOfWork, ILogger<UsersController> logger) : base(unitOfWork)
		{
			_logger = logger;
			_logger.LogDebug(1, "NLog injected into UsersController");
		}

		#endregion ctors

		#region Public methods

		[HttpGet]
		public async Task<IActionResult> GetRoleNames()
		{
			IEnumerable<string> roleNames = await _unitOfWork.RoleRepository.GetRolesNames();
			_logger.LogInformation("RolesController hit succesfull.");
			return Ok(roleNames);
		}

		#endregion Public methods
	}
}
