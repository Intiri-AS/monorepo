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
				.Include(p => p.ColorPalette)
				.Include(p => p.RoomDetails)
				.Include(p => p.Moodboard)
				.ToListAsync();
		}

		public async Task<Project> GetProjectById(int id)
		{
			return await _context.Projects
				.Where(p => p.Id == id)
				.Include(p => p.Room)
				.Include(p => p.StyleImages)
				.Include(p => p.ColorPalette)
				.Include(p => p.RoomDetails)
				.Include(p => p.Moodboard)
				.FirstOrDefaultAsync();
		}
	}
}
