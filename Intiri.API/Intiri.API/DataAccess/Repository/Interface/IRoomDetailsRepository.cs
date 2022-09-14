using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IRoomDetailsRepository: IRepositoryBase<RoomDetails>
	{
		Task<IEnumerable<RoomDetails>> GetRoomDetails();
		Task<RoomDetails> GetRoomDetailsById(int id);
	}
}
