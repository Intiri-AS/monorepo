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
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalletes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids)
		{
			return await _context.Moodboards
				.Where(m => ids.Contains(m.Id))
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalletes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId)
		{
			return await _context.Moodboards
				.Where(m => roomId == m.Room.Id)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<Moodboard> GetFullMoodboardById(int id)
		{
			return await _context.Moodboards
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalletes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.Where(m => id == m.Id)
				.FirstOrDefaultAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardFamily(Moodboard moodboard)
		{
			return await _context.Moodboards
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalletes)
				.Include(m => m.Style)
				.Where(m => m.Id != moodboard.Id)
				.Where(m => m.Style.Id == moodboard.Style.Id)
				.ToListAsync();
		}

		#endregion Public methods
	}
}
