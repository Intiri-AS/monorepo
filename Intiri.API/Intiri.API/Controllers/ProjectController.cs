using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;

namespace Intiri.API.Controllers
{
	public class ProjectController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProjectController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods


		#endregion Public methods
	}
}
