using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IMoodboardRepository: IRepositoryBase<Moodboard>
	{
		Task<IEnumerable<Moodboard>> GetMoodboards();
		Task<Moodboard> GetFullMoodboardById(int moodboardId);
		Task<Moodboard> GetFullMoodboardByName(string moodboardName);
		Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId);
		Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids);
		Task<IEnumerable<Moodboard>> GetMoodboardFamily(Moodboard moodboard);

		Task<Moodboard> CloneMoodboardAsync(Moodboard moodboard);
	}
}
