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

		public RoomRepository(DataContext context, IMapper mapper ) : base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		public async Task<IEnumerable<Room>> GetAllRoomsAsync()
		{
			//return await _context.Rooms.ToListAsync();
			return await _context.Rooms.Include(rt => rt.RoomType).ToListAsync();
		}
	}
}
