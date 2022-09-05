using Intiri.API.Models;
using Intiri.API.Models.Room;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IRoomRepository : IRepositoryBase<Room>
	{
		Task<IEnumerable<Room>> GetAllRoomsAsync();
	}
}
