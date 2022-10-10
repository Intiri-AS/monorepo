using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Product;

namespace Intiri.API.DataAccess.Repository
{
	public class PartnerRepository: RepositoryBase<Partner>, IPartnerRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public PartnerRepository(DataContext dataContext, IMapper mapper) : base(dataContext)
		{
			_mapper = mapper;
		}

		#endregion Constructors
	}
}
