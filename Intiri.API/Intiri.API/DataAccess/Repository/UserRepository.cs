using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class UserRepository : RepositoryBase<User>,  IUserRepository
	{
		private readonly IMapper _mapper;

		public UserRepository(DataContext context, IMapper mapper): base(context)
		{
			_mapper = mapper;
		}

		public async Task<User> GetUserByIdAsync(int id)
		{
			return await GetByID(id);
		}

		public async Task<User> GetUserByUserNameAsync(string username)
		{
			return await SingleOrDefaultAsync(x => x.UserName == username);
		}

		public async Task<IEnumerable<User>> GetUsersAsync()
		{
			return await _context.Users.ToListAsync();
		}

		public void UpdateUser(User user)
		{
			Update(user);
		}
	}
}
