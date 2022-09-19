using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IMoodboardRepository: IRepositoryBase<Moodboard>
	{
		Task<IEnumerable<Moodboard>> GetMoodboards();
		Task<Moodboard> GetFullMoodboardById(int id);
		Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId);
		Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids);
		Task<IEnumerable<Moodboard>> GetMoodboardFamily(Moodboard moodboard);
	}
}
