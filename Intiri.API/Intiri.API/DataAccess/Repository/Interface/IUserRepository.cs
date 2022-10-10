using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IUserRepository : IRepositoryBase<User>
	{
		void UpdateUser(User user);
		Task<User> GetUserByIdAsync(int id);
		Task<User> GetUserByUserNameAsync(string username);
		Task<IEnumerable<User>> GetUsersAsync();


		Task<IEnumerable<EndUser>> GetEndUsersAsync();
		Task<EndUser> GetEndUserByIdAsync(int id);
		Task<IEnumerable<Designer>> GetDesignerUsersAsync();
		Task<Designer> GetDesignerUserByIdAsync(int id);
		Task<IEnumerable<PartnerContact>> GetPartnerUsersAsync();
		Task<PartnerContact> GetPartnerUserByIdAsync(int id);
	}
}
