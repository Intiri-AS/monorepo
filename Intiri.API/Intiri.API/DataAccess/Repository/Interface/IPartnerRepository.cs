using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IPartnerRepository : IRepositoryBase<Partner>
	{
		Task<Partner> GetPartnerWithProductsAsync(int partnerId);
	}
}
