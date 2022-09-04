using Intiri.API.Models.Room;
using Intiri.API.Models.Style;

namespace Intiri.API.DataAccess.Repository.Interface
{
	public interface IRoomTypeRepository : IRepositoryBase<RoomType>
	{
		Task<IEnumerable<RoomType>> GetAllRoomTypesAsync();
		Task<RoomType> GetRoomTypeByIdAsync(int roomTypeId);
		Task<RoomType> GetRoomTypeWithRoomsByIdAsync(int roomTypeId);
		Task<bool> IsRoomTypeNameExists(string roomTypeName);
	}
}
