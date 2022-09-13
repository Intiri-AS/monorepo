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
	}
}
