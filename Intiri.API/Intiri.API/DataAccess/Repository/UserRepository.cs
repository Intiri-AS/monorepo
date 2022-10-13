using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class UserRepository : RepositoryBase<User>,  IUserRepository
	{
		private readonly IMapper _mapper;

		public UserRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#region Generic methods

		public async Task<IEnumerable<TEntity>> GetUsersAsync<TEntity>() where TEntity : class
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<TEntity>().ToListAsync();
		}

		public async Task<TEntity> GetUserByIdAsync<TEntity>(int id) where TEntity : User
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<TEntity>().SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<TEntity> GetUserUsernameIdAsync<TEntity>(string username) where TEntity : User
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<TEntity>().SingleOrDefaultAsync(eu => eu.UserName == username);
		}

		#endregion  Generic methods


		public async Task<IEnumerable<EndUser>> GetEndUsersAsync()
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<EndUser>().ToListAsync();
		}

		public async Task<EndUser> GetEndUserByIdAsync(int id)
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<EndUser>().SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<IEnumerable<Designer>> GetDesignerUsersAsync()
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>().ToListAsync();
		}

		public async Task<Designer> GetDesignerUserByIdAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>().SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<IEnumerable<PartnerContact>> GetPartnerUsersAsync()
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<PartnerContact>().ToListAsync();
		}

		public async Task<PartnerContact> GetPartnerUserByIdAsync(int id)
		{
			//return _context.Set<PartnerContact>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<PartnerContact>().SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public void UpdateUser(User user)
		{
			Update(user);
		}
	}
}
