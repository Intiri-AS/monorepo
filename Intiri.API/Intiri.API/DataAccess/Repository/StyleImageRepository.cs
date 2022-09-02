using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Style;

namespace Intiri.API.DataAccess.Repository
{
	public class StyleImageRepository : RepositoryBase<StyleImage>, IStyleImageRepository
	{
		#region Fields

		#endregion Fields

		private readonly IMapper _mapper;

		#region Constructors

		public StyleImageRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors
	}
}
