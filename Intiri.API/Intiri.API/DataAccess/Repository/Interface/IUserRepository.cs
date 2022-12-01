using Intiri.API.Models;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IUserRepository : IRepositoryBase<User>
	{
		Task<int> GetUsersCountAsync<TEntity>() where TEntity : class;
		Task<IEnumerable<TEntity>> GetUsersAsync<TEntity>() where TEntity : class;
		Task<TEntity> GetUserByIdAsync<TEntity>(int id) where TEntity : User;
		Task<TEntity> GetUserUsernameIdAsync<TEntity>(string username) where TEntity : User;

		Task<IEnumerable<EndUser>> GetEndUsersAsync();
		Task<EndUser> GetEndUserByIdAsync(int id);
		Task<EndUser> GetEndUserByIdWithInspirationsAsync(int id);
		Task<EndUser> GetEndUserWithConsultationPaymentsAsync(int id);
		Task<EndUser> GetEndUserWithCollectionsAsync(int id);
		Task<EndUser> GetEndUserByIdWithProjectsAsync(int id);
		Task<IEnumerable<ClientsPerMonthDTO>> GetClientsPerMonthAsync();

		Task<IEnumerable<Designer>> GetDesignerUsersAsync();
		Task<IEnumerable<Designer>> GetDesignersWithRatingsAsync();
		Task<Designer> GetDesignerUserByIdAsync(int id);
		Task<Designer> GetDesignerByIdWithRatingsAsync(int id);
		Task<Designer> GetDesignerByIdWithReviewsAsync(int id);
		Task<Designer> GetDesignerByIdWithClientsAsync(int id);
		Task<Designer> GetDesignerByIdWithStatisticsAsync(int id);
		Task<bool> IsDesignerExistByAsync(int id);
		Task<Designer> GetDesignerByIdAsync(int id);

		Task<IEnumerable<PartnerContact>> GetPartnerUsersAsync();
		Task<PartnerContact> GetPartnerUserByIdAsync(int id);

		Task<List<ChatMessage>> GetUserMassegesByUserIdAsync(int userId);
		Task<bool> DoesAnyUserExistWithId(int userId);

		void UpdateUser(User user);
	}
}
