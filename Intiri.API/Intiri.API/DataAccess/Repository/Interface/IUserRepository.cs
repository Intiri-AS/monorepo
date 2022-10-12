using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IUserRepository : IRepositoryBase<User>
	{
		void UpdateUser(User user);

		Task<IEnumerable<TEntity>> GetUsersAsync<TEntity>() where TEntity : class;
		Task<T> GetUserByIdAsync<T>(int id) where T : User;

		Task<IEnumerable<EndUser>> GetEndUsersAsync();
		Task<EndUser> GetEndUserByIdAsync(int id);
		Task<IEnumerable<Designer>> GetDesignerUsersAsync();
		Task<Designer> GetDesignerUserByIdAsync(int id);
		Task<IEnumerable<PartnerContact>> GetPartnerUsersAsync();
		Task<PartnerContact> GetPartnerUserByIdAsync(int id);
	}
}
