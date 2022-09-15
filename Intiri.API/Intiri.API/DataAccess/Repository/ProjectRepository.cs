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

		public async Task<IEnumerable<Project>> GetProjects()
		{
			return await _context.Projects
				.Include(p => p.Room)
				.Include(p => p.StyleImages)
				.Include(p => p.ColorPallete)
				.ToListAsync();
		}
	}
}
