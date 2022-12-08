using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IPartnerRepository : IRepositoryBase<Partner>
	{
		Task<Partner> GetPartnerWithProductsAsync(int partnerId);
		Task<Partner> GetPartnerWithContactsAsync(int partnerId);
		Task<Partner> GetPartnerAllAsync(int partnerId);
		Task<IEnumerable<Partner>> GetPartnersAsync();
		Task<int> GetPartnersCountAsync();
		Task<Partner> GetPartnerWithFullProductsAsync(int partnerId);
	}
}
