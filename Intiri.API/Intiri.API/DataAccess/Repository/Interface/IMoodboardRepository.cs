using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
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
		Task<IEnumerable<Moodboard>> GetMoodboardsWithImagesByIds(ICollection<int> ids);

		//Task<Moodboard> CloneMoodboardAsync(Moodboard moodboard, RoomDetails roomDetails);
		Task<ClientMoodboard> CloneMoodboardAsync(Moodboard moodboard, RoomDetails roomDetails, Project project);
		Task<IEnumerable<ClientMoodboard>> GetClientMoodboardsByIdsList(ICollection<int> ids);
		Task<int> GetMoodboardsCountAsync();
	}
}
