using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

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

		public async Task<int> GetMoodboardsCountAsync()
		{
			return await _context.Moodboards.Where(m => m.Project == null).CountAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboards()
		{
			return await _context.Moodboards
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalettes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids)
		{
			return await _context.Moodboards
				.Where(m => ids.Contains(m.Id))
				.Include(m => m.Materials)
				.Include(m => m.Products)
				.Include(m => m.ColorPalettes)
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

		public async Task<Moodboard> GetFullMoodboardById(int moodboardId)
		{
			return await _context.Moodboards
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalettes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.Where(m => moodboardId == m.Id)
				.FirstOrDefaultAsync();
		}

		public async Task<Moodboard> GetFullMoodboardByName(string moodboardName)
		{
			return await _context.Moodboards
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalettes)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.Where(m => moodboardName == m.Name)
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
				.Include(m => m.ColorPalettes)
				.Include(m => m.Style)
				.Where(m => m.Id != moodboard.Id)
				.Where(m => m.Style.Id == moodboard.Style.Id)
				.ToListAsync();
		}

		public async Task<Moodboard> CloneMoodboardAsync(Moodboard moodboard)
		{
			PropertyValues moodboardValues = _context.Entry(moodboard).CurrentValues.Clone();
			Moodboard clonedMoodboard = new();
			moodboardValues[nameof(clonedMoodboard.Id)] = 0;
			moodboardValues[nameof(clonedMoodboard.IsTemplate)] = false;

			_context.Entry(clonedMoodboard).CurrentValues.SetValues(moodboardValues);
			_context.Entry(clonedMoodboard).State = EntityState.Added;

			_context.Moodboards.Add(clonedMoodboard);
			await _context.SaveChangesAsync();

			clonedMoodboard.SourceMoodboard = moodboard;
			clonedMoodboard.Materials = moodboard.Materials.ToArray();
			clonedMoodboard.ColorPalettes = moodboard.ColorPalettes.ToArray();
			clonedMoodboard.Products = moodboard.Products.ToArray();
			clonedMoodboard.IsTemplate = false;

			return clonedMoodboard;
		}

		#endregion Public methods
	}
}
