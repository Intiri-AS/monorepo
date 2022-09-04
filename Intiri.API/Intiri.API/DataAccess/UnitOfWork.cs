﻿using AutoMapper;
using Intiri.API.DataAccess.Repository;
using Intiri.API.DataAccess.Repository.Interface;

namespace Intiri.API.DataAccess
{
	public class UnitOfWork : IUnitOfWork
	{
		#region Fields

		private readonly DataContext _dataContext;
		private readonly IRoleRepository _roleRepository;
		private readonly IUserRepository _userRepository;
		private readonly IStyleRepository _stylRepository;
		private readonly IStyleImageRepository _stylImageRepository;
		private readonly IRoomRepository _roomRepository;
		private readonly IRoomTypeRepository _roomTypeRepository;
		private readonly IMaterialRepository _materialRepository;
		private readonly IMaterialTypeRepository _materialTypeRepository;

		#endregion Fields

		#region ctors

		public UnitOfWork(DataContext dataContext, IMapper mapper)
		{
			_roleRepository = new RoleRepository(dataContext, mapper);
			_userRepository = new UserRepository(dataContext, mapper);
			_stylRepository = new StyleRepository(dataContext, mapper);
			_stylImageRepository = new StyleImageRepository(dataContext, mapper);
			_roomRepository = new RoomRepository(dataContext, mapper);
			_roomTypeRepository = new RoomTypeRepository(dataContext, mapper);
			_materialRepository = new MaterialRepository(dataContext);
			_materialTypeRepository = new MaterialTypeRepository(dataContext);

			_dataContext = dataContext;
		}

		#endregion ctors

		#region Properties

		public IRoleRepository RoleRepository => _roleRepository;
		public IUserRepository UserRepository => _userRepository;
		public IStyleRepository StyleRepository => _stylRepository;
		public IStyleImageRepository StyleImageRepository => _stylImageRepository;
		public IRoomRepository RoomRepository => _roomRepository;
		public IRoomTypeRepository RoomTypeRepository => _roomTypeRepository;
		public IMaterialRepository MaterialRepository => _materialRepository;
		public IMaterialTypeRepository MaterialTypeRepository => _materialTypeRepository;

		#endregion Properties

		#region Public methods

		public async Task<bool> SaveChanges()
		{
			if (!_dataContext.ChangeTracker.HasChanges())
			{
				return false;
			}

			return await _dataContext.SaveChangesAsync() > 0;
		}

		#endregion Public methods
	}
}
