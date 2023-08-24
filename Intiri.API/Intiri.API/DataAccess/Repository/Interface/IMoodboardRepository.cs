using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMoodboardRepository : IRepositoryBase<Moodboard>
	{
		Task<IEnumerable<Moodboard>> GetMoodboards();
		Task<Moodboard> GetFullMoodboardById(int moodboardId);
		Task<Moodboard> GetFullMoodboardByName(string moodboardName);
		Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId);
		Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids);
		Task<IEnumerable<Moodboard>> GetMoodboardStyleFamilyAsync(int styleId, int roomId);
		Task<IEnumerable<Moodboard>> GetMoodboardsWithImagesByIds(ICollection<int> ids);

		Task<IEnumerable<ClientMoodboard>> GetClientMoodboardsByIdsList(ICollection<int> ids);
		Task<int> GetMoodboardsCountAsync();


		Task<ClientMoodboard> GetClientMoodboardById(int moodboardId);
		Task<Dictionary<int, int>> GetMoodboardStylesCountAsync();
		Task<Dictionary<int, int>> GetClientMoodboardStylesCountAsync();

        Task<Moodboard> GetFullMoodboardByIdOptimized(int moodboardId);
		Task<ClientMoodboard> GetClientMoodboardOptimizedById(int moodboardId);
    }
}
