using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Product;
using Microsoft.EntityFrameworkCore;

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

		public async Task<Partner> GetPartnerWithProductsAsync(int partnerId)
		{
			return (await Get(partner => partner.Id == partnerId, includeProperties: "Products")).FirstOrDefault();
		}

		public async Task<Partner> GetPartnerWithContactsAsync(int partnerId)
		{
			return (await Get(partner => partner.Id == partnerId, includeProperties: "PartnerContacts")).FirstOrDefault();
		}

		public async Task<Partner> GetPartnerAllAsync(int partnerId)
		{
			return (await Get(partner => partner.Id == partnerId, includeProperties: "PartnerContacts,Products")).FirstOrDefault();
		}

		public async Task<IEnumerable<Partner>> GetPartnersAsync()
		{
			return await _context.Partners.ToListAsync();
		}

		public async Task<int> GetPartnersCountAsync()
		{
			return await _context.Partners.CountAsync();
		}

		#endregion Constructors
	}
}
