using Intiri.API.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers.Base
{
    [ApiController]
    [Route("[controller]")]
    public class BaseApiController : ControllerBase
    {
		protected IUnitOfWork _unitOfWork;

		public BaseApiController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}
	}
}