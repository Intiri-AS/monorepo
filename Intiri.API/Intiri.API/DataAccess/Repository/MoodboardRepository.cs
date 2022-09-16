using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class MoodboardRepository: RepositoryBase<Moodboard>, IMoodboardRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public MoodboardRepository(DataContext dataContext, IMapper mapper): base(dataContext)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		public async Task<IEnumerable<Moodboard>> GetMoodboards()
		{
			return await _context.Moodboards
				.Include(p => p.Room)
				.Include(p => p.Materials)
				.Include(p => p.Products)
				.Include(p => p.ColorPalletes)
				.Include(p => p.Style)
				.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids)
		{
			return await _context.Moodboards
				.Where(m => ids.Contains(m.Id))
				.Include(p => p.Room)
				.Include(p => p.Materials)
				.Include(p => p.Products)
				.Include(p => p.ColorPalletes)
				.Include(p => p.Style)
				.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		#endregion Public methods
	}
}
