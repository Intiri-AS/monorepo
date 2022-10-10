﻿using AutoMapper;
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
			return await _context.Users.OfType<PartnerContact>().SingleOrDefaultAsync(/*eu => eu.Id == id*/);
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
