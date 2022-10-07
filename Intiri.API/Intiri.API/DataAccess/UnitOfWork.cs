using AutoMapper;
using Intiri.API.DataAccess.Repository;
using Intiri.API.DataAccess.Repository.Interface;
using Microsoft.EntityFrameworkCore;

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
		private readonly IColorRepository _colorRepository;
		private readonly IProductRepository _productRepository;
		private readonly IProductTypeRepository _productTypeRepository;
		private readonly IColorPaletteRepository _colorPaletteRepository;
		private readonly IRoomDetailsRepository _roomDetailsRepository;
		private readonly IProjectRepository _projectRepository;
		private readonly IMoodboardRepository _moodboardRepository;

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
			_colorRepository = new ColorRepository(dataContext);
			_productRepository = new ProductRepository(dataContext, mapper);
			_productTypeRepository = new ProductTypeRepository(dataContext, mapper);
			_colorPaletteRepository = new ColorPaletteRepository(dataContext, mapper);
			_roomDetailsRepository = new RoomDetailsRepository(dataContext);
			_projectRepository = new ProjectRepository(dataContext, mapper);
			_moodboardRepository = new MoodboardRepository(dataContext, mapper);

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
		public IColorRepository ColorRepository => _colorRepository;
		public IProductRepository ProductRepository => _productRepository;
		public IProductTypeRepository ProductTypeRepository => _productTypeRepository;
		public IColorPaletteRepository ColorPaletteRepository => _colorPaletteRepository;
		public IRoomDetailsRepository RoomDetailsRepository => _roomDetailsRepository;
		public IProjectRepository ProjectRepository => _projectRepository;
		public IMoodboardRepository MoodboardRepository => _moodboardRepository;

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
