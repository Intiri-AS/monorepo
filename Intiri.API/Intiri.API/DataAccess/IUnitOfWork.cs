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
		IMaterialRepository MaterialRepository { get; }
		IMaterialTypeRepository MaterialTypeRepository { get; }
		IColorRepository ColorRepository { get; }
		IProductRepository ProductRepository { get; }
		IProductTypeRepository ProductTypeRepository { get; }
		IColorPalleteRepository ColorPalleteRepository { get; }
		IRoomDetailsRepository RoomDetailsRepository { get; }
		IProjectRepository ProjectRepository { get; }
		IMoodboardRepository MoodboardRepository { get; }

		Task<bool> SaveChanges();
	}
}
