using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
    public class RoomRepository : RepositoryBase<Room>, IRoomRepository
    {
        #region Fields

        private readonly IMapper _mapper;

        #endregion Fields

        #region Constructors

        public RoomRepository(DataContext context, IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }

        #endregion Constructors

        public async Task<IEnumerable<Room>> GetAllRoomsAsync()
        {
            //return await _context.Rooms.ToListAsync();
            return await _context.Rooms.Include(rt => rt.RoomType).ToListAsync();
        }

        public async Task<Room> GetRoomByIdAsync(int roomId)
        {
            return await GetByID(roomId);
        }

        public async Task<Room> GetRoomByIdWithStyleImagesAsync(int roomId)
        {
            return (
                await Get(room => room.Id == roomId, includeProperties: "StyleImages")
            ).SingleOrDefault();
        }

        public async Task<IEnumerable<Room>> GetRoomsByIdsListAsync(ICollection<int> roomIds)
        {
            return await _context.Rooms.Where(r => roomIds.Contains(r.Id)).ToListAsync();
        }
    }
}
