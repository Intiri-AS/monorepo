using Intiri.API.Models.Room;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IRoomDetailsRepository : IRepositoryBase<RoomDetails>
    {
        Task<IEnumerable<RoomDetails>> GetRoomDetails();
    }
}
