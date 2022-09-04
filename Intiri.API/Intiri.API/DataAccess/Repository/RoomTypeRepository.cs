using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class RoomTypeRepository : RepositoryBase<RoomType>, IRoomTypeRepository
	{

		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public RoomTypeRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		public async Task<IEnumerable<RoomType>> GetAllRoomTypesAsync()
		{
			return await _context.RoomTypes.ToListAsync();
		}

		public async Task<RoomType> GetRoomTypeByIdAsync(int roomTypeId)
		{
			return await GetByID(roomTypeId);

		}

		public async Task<RoomType> GetRoomTypeRoomsByIdAsync(int roomTypeId)
		{
			return (await Get(roomType => roomType.Id == roomTypeId, includeProperties: "Rooms")).SingleOrDefault();
			
		}

		public async Task<bool> IsRoomTypeNameExists(string roomTypeName)
		{
			return await DoesAnyExist(rt => rt.Name == roomTypeName.ToLower());
		}
	}
}
