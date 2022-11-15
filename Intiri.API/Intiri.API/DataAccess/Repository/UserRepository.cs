using AutoMapper;
using AutoMapper.QueryableExtensions;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Globalization;

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

		public async Task<EndUser> GetEndUserByIdWithProjectsAsync(int id)
		{
			//return _context.Set<EndUser>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<EndUser>().Include(pr => pr.CreatedProjects).SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<EndUser> GetEndUserWithConsultationPaymentsAsync(int id)
		{
			return await _context.Users.OfType<EndUser>()
				.Include(i => i.ConsultationPayments)
					.ThenInclude(mo => mo.MoodboardOffer)
					.ThenInclude(de => de.Designer)
				.SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<EndUser> GetEndUserWithCollectionsAsync(int id)
		{
			return await _context.Users.OfType<EndUser>()
				.Include(cp => cp.ConsultationPayments)
				.Include(p => p.CreatedProjects)
					.ThenInclude(cm => cm.ProjectMoodboards)
					.ThenInclude(rd => rd.RoomDetails)
				.SingleOrDefaultAsync(eu => eu.Id == id);
		}

		public async Task<IEnumerable<ClientsPerMonthDTO>> GetClientsPerMonthAsync()
		{
			//var articlesGrouped1 = _context.Users.OfType<EndUser>()
			//	.Where(x => x.Id > 0)
			//	.GroupBy(s => new { user = s.Id, date = s.Created.Month })
			//	.Select(x => new { count = x.Count(), district = x.Key.user, date = x.Key.date })
			//	.ToList();

			IEnumerable<ClientsPerMonthDTO> clientsPerMonth2 =
				(from mnt in Enumerable.Range(1, 12)
				 join clt in _context.Users.OfType<EndUser>() on mnt equals clt.Created.Month into monthGroup
				 select new ClientsPerMonthDTO { Month = mnt, ClientCount = monthGroup.Count() })
				.ToList();

			return clientsPerMonth2;
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
				.Include(co => co.ConsultationPaymentsReceived)
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
				.Include(cp => cp.ConsultationPaymentsReceived).ThenInclude(cl => cl.MoodboardOffer)
				.SingleOrDefaultAsync(d => d.Id == id);
		}

		public async Task<Designer> GetDesignerByIdWithStatisticsAsync(int id)
		{
			//return _context.Set<Designer>().SingleOrDefault(x => x.Id == id);
			return await _context.Users.OfType<Designer>()
				.Include(cp => cp.ConsultationPaymentsReceived).ThenInclude(cl => cl.Payer)
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
