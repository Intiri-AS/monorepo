using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ProjectRepository: RepositoryBase<Project>, IProjectRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProjectRepository(DataContext context, IMapper mapper): base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Admin methods

		public async Task<IEnumerable<Project>> GetProjects()
		{
			return await _context.Projects
				.Include(p => p.Room)
				.Include(p => p.RoomDetails)
				.Include(p => p.StyleImages)
				.Include(p => p.ColorPallete)
				.ToListAsync();
		}

		public Task<Project> GetProjectById(int id)
		{
			throw new NotImplementedException();
		}

		#endregion Admin methods

		#region End user methods

		public Task<IEnumerable<Project>> GetUserProjects()
		{
			throw new NotImplementedException();
		}

		public Task<Project> GetUserProjectById(int id)
		{
			throw new NotImplementedException();
		}

		#endregion End user methods
	}
}
