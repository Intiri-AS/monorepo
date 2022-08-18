using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class UsersController : BaseApiController
	{
		#region Fields

		private readonly ILogger<UsersController> _logger;

		#endregion Fields

		#region ctors

		public UsersController(IUnitOfWork unitOfWork, ILogger<UsersController> logger) : base(unitOfWork)
		{
			_logger = logger;
			_logger.LogDebug(1, "NLog injected into UsersController");
		}

		#endregion ctors

		#region Public methods

		[HttpGet]
		public IActionResult Test()
		{
			_logger.LogInformation("UsersControler hit succesfull.");
			return Ok("Test successful");
		}

		#endregion Public methods
	}
}
