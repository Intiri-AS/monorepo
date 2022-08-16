using AutoMapper;
using Intiri.API.DataAccess.Repository;
using Intiri.API.DataAccess.Repository.Interface;

namespace Intiri.API.DataAccess
{
	public class UnitOfWork : IUnitOfWork
	{
		#region Fields

		private readonly DataContext _dataContext;
		private readonly IRoleRepository _roleRepository;

		#endregion Fields

		#region ctors

		public UnitOfWork(DataContext dataContext, IMapper mapper)
		{
			_roleRepository = new RoleRepository(dataContext, mapper);
			_dataContext = dataContext;
		}

		#endregion ctors

		#region Properties

		public IRoleRepository RoleRepository => _roleRepository;

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
