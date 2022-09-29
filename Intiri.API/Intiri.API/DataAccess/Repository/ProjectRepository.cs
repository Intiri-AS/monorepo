﻿using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
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
				.Include(p => p.ColorPalettes)
				.Include(p => p.RoomDetails)
				.Include(p => p.ProjectMoodboards)
				.ToListAsync();
		}

		public async Task<Project> GetProjectById(int id)
		{
			return await _context.Projects
				.Where(p => p.Id == id)
				.Include(p => p.Room)
				.Include(p => p.StyleImages)
				.Include(p => p.ColorPalettes)
				.Include(p => p.RoomDetails)
				.Include(p => p.ProjectMoodboards)
				.FirstOrDefaultAsync();
		}

		public async Task<IEnumerable<Project>> GetProjectsBasicInfoForUser(int userId)
		{
			return (await Get(project => project.EndUserId == userId, includeProperties: "ColorPalettes,StyleImages"));

			//return await _context.Projects
			//	.Where(p => p.EndUserId == userId)
			//	.Include(p => p.Room)
			//	.Include(p => p.StyleImages)
			//	.Include(p => p.ColorPalettes)
			//	.Include(p => p.ProjectMoodboards)
			//	.ToListAsync();
		}
	}
}
