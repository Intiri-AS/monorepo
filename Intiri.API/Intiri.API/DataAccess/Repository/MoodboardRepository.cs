using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
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
			return await _context.Moodboards.Where(m => !(m is ClientMoodboard)).CountAsync();
		}

		public async Task<Dictionary<int, int>> GetMoodboardStylesCountAsync()
		{
			List<int> stylesIds = await _context.Moodboards
				.Include(s => s.Style).Select(s => s.Style.Id).ToListAsync();

			Dictionary<int, int> kvpList = stylesIds.GroupBy(x => x)
				.Select(g => new { Value = g.Key, Count = g.Count() })
				.OrderByDescending(x => x.Count)
				.ToDictionary(x => x.Value, x => x.Count);

			return kvpList;
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboards()
		{
			return await _context.Moodboards
				.Where(s => !(s is ClientMoodboard))
				.Include(m => m.Room)
				.Include(m => m.Materials)
					.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products)
					.ThenInclude(p => p.ProductType)
				.Include(m => m.ColorPalettes)
				.Include(m => m.Designer)
				.Include(m => m.Style)
					.ThenInclude(s => s.StyleImages)
				.ToListAsync();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsWithImagesByIds(ICollection<int> ids)
		{
			return await _context.Moodboards
				.Where(m => ids.Contains(m.Id))
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

		public async Task<ClientMoodboard> GetClientMoodboardById(int moodboardId)
		{
			return await _context.Moodboards.OfType<ClientMoodboard>()
				.SingleOrDefaultAsync(cm => cm.Id == moodboardId);
		}

		public async Task<IEnumerable<ClientMoodboard>> GetClientMoodboardsByIdsList(ICollection<int> ids)
		{
			return await _context.Moodboards.OfType<ClientMoodboard>()
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
				.Where(m => roomId == m.Room.Id && m.IsTemplate == true)
				.Include(cp => cp.ColorPalettes)
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

		public async Task<IEnumerable<Moodboard>> GetMoodboardStyleFamilyAsync(int styleId, int roomId)
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
				.Where(m => m.Style.Id == styleId && m.Room.Id != roomId)
				.ToListAsync();
		}

		//public async Task<Moodboard> CloneMoodboardAsync(Moodboard moodboard, RoomDetails roomDetails)
		//{
		//	PropertyValues moodboardValues = _context.Entry(moodboard).CurrentValues.Clone();
		//	Moodboard clonedMoodboard = new();
		//	moodboardValues[nameof(clonedMoodboard.Id)] = 0;
		//	moodboardValues[nameof(clonedMoodboard.IsTemplate)] = false;

		//	_context.Entry(clonedMoodboard).CurrentValues.SetValues(moodboardValues);
		//	_context.Entry(clonedMoodboard).State = EntityState.Added;

		//	_context.Moodboards.Add(clonedMoodboard);
		//	roomDetails.Moodboard = clonedMoodboard;
		//	await _context.SaveChangesAsync();

		//	clonedMoodboard.SourceMoodboard = moodboard;
		//	clonedMoodboard.Materials = moodboard.Materials.ToArray();
		//	clonedMoodboard.ColorPalettes = moodboard.ColorPalettes.ToArray();
		//	clonedMoodboard.Products = moodboard.Products.ToArray();

		//	return clonedMoodboard;
		//}

		public async Task<ClientMoodboard> CloneMoodboardAsync(Moodboard moodboard, RoomDetails roomDetails, Project project)
		{
			ClientMoodboard clonedMoodboard = new ();
			
			clonedMoodboard.Name = moodboard.Name;
			clonedMoodboard.IsTemplate = false;
			clonedMoodboard.Created = DateTime.UtcNow;
			clonedMoodboard.Updated = DateTime.UtcNow;
			clonedMoodboard.Description = moodboard.Description;
			clonedMoodboard.Room = moodboard.Room;
			clonedMoodboard.Style = moodboard.Style;
			clonedMoodboard.SourceMoodboardId = moodboard.Id;
			clonedMoodboard.Materials = moodboard.Materials.ToArray();
			clonedMoodboard.ColorPalettes = moodboard.ColorPalettes.ToArray();
			clonedMoodboard.Products = moodboard.Products.ToArray();

			clonedMoodboard.Project = project;

			_context.Moodboards.Add(clonedMoodboard);

			roomDetails.Moodboard = clonedMoodboard;


			return clonedMoodboard;
		}

		#endregion Public methods
	}
}
