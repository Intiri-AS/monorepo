﻿using Intiri.API.DataAccess.Repository.Interface;

namespace Intiri.API.DataAccess
{
	public interface IUnitOfWork
	{
		IRoleRepository RoleRepository { get; }
		IUserRepository UserRepository { get; }
		IStyleRepository StyleRepository { get; }
		IStyleImageRepository StyleImageRepository { get; }
		IRoomRepository RoomRepository { get; }
		IRoomTypeRepository RoomTypeRepository { get; }

		Task<bool> SaveChanges();
	}
}
