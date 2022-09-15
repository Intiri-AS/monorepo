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
			return await _context.Moodboards.ToListAsync();
		}

		public Task<Moodboard> GetMoodboardById(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<Moodboard>> GetMoodboardsByIdsList(ICollection<int> ids)
		{
			return await _context.Moodboards.Where(m => ids.Contains(m.Id)).ToListAsync();
		}

		#endregion Public methods
	}
}
