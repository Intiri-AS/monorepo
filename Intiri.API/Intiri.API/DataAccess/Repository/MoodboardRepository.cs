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
	public class MoodboardRepository : RepositoryBase<Moodboard>, IMoodboardRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public MoodboardRepository(DataContext dataContext, IMapper mapper) : base(dataContext)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		public async Task<int> GetMoodboardsCountAsync()
		{
			return await _context.Moodboards.Where(m => !(m is ClientMoodboard)).CountAsync();
		}

		public async Task<Dictionary<int, int>> GetClientMoodboardStylesCountAsync()
		{
			List<int> stylesIds = await _context.Moodboards.OfType<ClientMoodboard>()
				.Include(s => s.Style).Select(s => s.Style.Id).ToListAsync();

			Dictionary<int, int> kvpList = stylesIds.GroupBy(x => x)
				.Select(g => new { Value = g.Key, Count = g.Count() })
				.OrderByDescending(x => x.Count)
				.ToDictionary(x => x.Value, x => x.Count);

			return kvpList;
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
				.Include(m => m.Materials.Take(2))
				//.ThenInclude(mat => mat.MaterialType)
				.Include(m => m.Products.Take(2))
				//.ThenInclude(p => p.ProductType)
				//.Include(m => m.ColorPalettes)
				.Include(m => m.Designer)
				.Include(m => m.Style)
				.Include(m => m.StyleImages.Take(2))
				.OrderByDescending(x => x.Id).AsNoTracking()
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
				.Include(cp => cp.ConsultationPaymentSend)
				.Include(cp => cp.ConsultationPaymentReceive)
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

		//    public async Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId)
		//    {
		//        return await _context.Moodboards.AsNoTracking()
		//            .Where(m => roomId == m.Room.Id && m.IsTemplate == true)
		//            .Include(cp => cp.ColorPalettes)
		//.Include(m => m.Style)
		//	.ThenInclude(s => s.StyleImages)
		//.ToListAsync();
		//    }

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByRoomId(int roomId)
		{
			return await _context.Moodboards.AsNoTracking()
				.Where(m => roomId == m.Room.Id && m.IsTemplate == true)
				.Include(cp => cp.ColorPalettes)
				.Include(m => m.StyleImages)
				.Include(m => m.Materials.Take(1))
				.Include(m => m.Products.Take(1))
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
				//.ThenInclude(s => s.StyleImages)
				.Include(m => m.StyleImages)
				.Where(m => moodboardId == m.Id)
				.FirstOrDefaultAsync();
		}

		public async Task<Moodboard> GetFullMoodboardByIdOptimized(int moodboardId)
		{
			return await _context.Moodboards.AsNoTracking()
				.Include(m => m.Materials)
				.Include(m => m.Products)
				.Include(m => m.ColorPalettes)
				.Include(m => m.Style)
				.Include(m => m.StyleImages)
				.Where(m => moodboardId == m.Id)
				.AsNoTracking()
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

		//public async Task<IEnumerable<Moodboard>> GetMoodboardStyleFamilyAsync(int styleId, int roomId)
		//{
		//	return await _context.Moodboards
		//		.Include(m => m.Room)
		//		.Include(m => m.Materials)
		//			.ThenInclude(mat => mat.MaterialType)
		//		.Include(m => m.Products)
		//			.ThenInclude(p => p.ProductType)
		//		.Include(m => m.ColorPalettes)
		//		.Include(m => m.Style)
		//			.ThenInclude(s => s.StyleImages)
		//		.Where(m => m.Style.Id == styleId && m.Room.Id != roomId)
		//		.ToListAsync();
		//}

        public async Task<IEnumerable<Moodboard>> GetMoodboardStyleFamilyAsync(int styleId, int roomId)
        {
            return await _context.Moodboards.AsNoTracking()
                .Include(m => m.Materials.Take(1))
                .Include(m => m.Products.Take(1))
                .Include(m => m.StyleImages.Take(1))
                .Where(m => m.Style.Id == styleId && m.Room.Id != roomId).AsNoTracking()
                .ToListAsync();
        }

        #endregion Public methods
    }
}
