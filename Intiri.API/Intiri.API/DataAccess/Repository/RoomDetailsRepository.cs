using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;

namespace Intiri.API.DataAccess.Repository
{
	public class RoomDetailsRepository: RepositoryBase<RoomDetails>, IRoomDetailsRepository
	{
		public RoomDetailsRepository(DataContext context): base(context)
		{
		}

		public async Task<RoomDetails> GetRoomDetailsById(int id)
		{
			return await GetByID(id);
		}
	}
}
