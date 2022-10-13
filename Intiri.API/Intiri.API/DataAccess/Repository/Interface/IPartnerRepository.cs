using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IPartnerRepository : IRepositoryBase<Partner>
	{
		Task<Partner> GetPartnerWithProductsAsync(int partnerId);
		Task<Partner> GetPartnerAllContactsAsync(int partnerId);
		Task<IEnumerable<Partner>> GetPartnersAsync();
	}
}
