using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Room;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
    public class RoomDetailsRepository : RepositoryBase<RoomDetails>, IRoomDetailsRepository
    {
        public RoomDetailsRepository(DataContext context)
            : base(context) { }

        public async Task<IEnumerable<RoomDetails>> GetRoomDetails()
        {
            return await _context.RoomDetails.ToListAsync();
        }
    }
}
