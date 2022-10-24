﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;
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

		public async Task<int> GetUsersCountAsync<TEntity>() where TEntity : class
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<TEntity>().CountAsync();
		}

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

		#region EndUser

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

		public async Task<EndUser> GetEndUserByIdWithInspirationsAsync(int id)
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<EndUser>().Include(i => i.Inspirations).SingleOrDefaultAsync(eu => eu.Id == id);
		}

		#endregion EndUser

		#region Designer

		public async Task<IEnumerable<Designer>> GetDesignerUsersAsync()
		{
			return await _context.Users.OfType<Designer>()
				.Include(m => m.CreatedMoodboards)
				.Include(u => u.Roles).ThenInclude(r => r.Role)
				.ToListAsync();
		}

		public async Task<IEnumerable<Designer>> GetDesignersWithRatingsAsync()
		{
			return await _context.Users.OfType<Designer>()
				.Include(dr => dr.DesignerRating)
				.Include(m => m.CreatedMoodboards)
				.Include(u => u.Roles).ThenInclude(r => r.Role)
				.ToListAsync();
		}

		public async Task<Designer> GetDesignerUserByIdAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>()
				.Include(m => m.CreatedMoodboards)
				.Include(u => u.Roles).ThenInclude(r => r.Role)
				.SingleOrDefaultAsync(d => d.Id == id);
		}

		public async Task<Designer> GetDesignerByIdWithRatingsAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>()
				.Include(dr => dr.DesignerRating)
				.Include(m => m.CreatedMoodboards)
				.Include(u => u.Roles).ThenInclude(r => r.Role)
				.SingleOrDefaultAsync(d => d.Id == id);
		}

		public async Task<Designer> GetDesignerByIdWithReviewsAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>()
				.Include(dr => dr.DesignerRating)
				.Include(c => c.DesignerReviews).ThenInclude(eu => eu.EndUser)
				.Include(m => m.CreatedMoodboards)
				.Include(u => u.Roles).ThenInclude(r => r.Role)
				.SingleOrDefaultAsync(d => d.Id == id);
		}

		public async Task<Designer> GetDesignerByIdWithClientsAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>()
				.Include(cp => cp.ConsultationPaymentsReceived).ThenInclude(cl => cl.Payer)
				.Include(cp => cp.ConsultationPaymentsReceived).ThenInclude(cl => cl.Moodboard).ThenInclude(s => s.Style)
				.SingleOrDefaultAsync(d => d.Id == id);
		}

		public async Task<bool> IsDesignerExistByAsync(int id)
		{
			return await _context.Users.OfType<Designer>().AnyAsync(d => d.Id == id);
		}

		#endregion Designer

		#region Partner

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

		#endregion Partner

		public void UpdateUser(User user)
		{
			Update(user);
		}
	}
}
