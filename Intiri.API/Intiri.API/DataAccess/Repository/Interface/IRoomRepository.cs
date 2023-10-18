using Intiri.API.Models;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;

namespace Intiri.API.DataAccess.Repository.Interface
{
    public interface IRoomRepository : IRepositoryBase<Room>
    {
        Task<IEnumerable<Room>> GetAllRoomsAsync();
        Task<Room> GetRoomByIdAsync(int roomId);
        Task<IEnumerable<Room>> GetRoomsByIdsListAsync(ICollection<int> roomIds);
        Task<Room> GetRoomByIdWithStyleImagesAsync(int roomId);
    }
}
