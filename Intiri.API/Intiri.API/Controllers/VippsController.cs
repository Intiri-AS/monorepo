using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class VippsController : BaseApiController
	{
		private readonly IVippsLoginService _vippsLoginService;
		private readonly ILogger<AccountController> _logger;

		public VippsController(
			IUnitOfWork unitOfWork,
			IVippsLoginService vippsLoginService,
			ILogger<AccountController> logger) : base(unitOfWork)
		{
			_vippsLoginService = vippsLoginService;
			_logger = logger;
		}

		[HttpGet("auth-url")]
		public async Task<ActionResult<string>> GetAuthorizationUrl()
		{
			var auth = await _vippsLoginService.GetAuthorizationUrl();
			var authOut = new AuthorizationUrlOutDTO
			{
				AuthorizationUrl = auth
			};
			return Ok(authOut);
		}

		[HttpPost("access-token")]
		public async Task<ActionResult> V
	}
}
