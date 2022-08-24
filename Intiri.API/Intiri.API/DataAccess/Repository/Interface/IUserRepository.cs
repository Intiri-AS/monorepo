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
	}
}
