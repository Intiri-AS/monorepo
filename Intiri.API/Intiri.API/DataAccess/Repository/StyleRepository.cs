using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Style;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class StyleRepository : RepositoryBase<Style>, IStyleRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion

		#region Constructors

		public StyleRepository(DataContext context, IMapper mapper) : base(context)
		{
			_mapper = mapper;
		}

		#endregion

		public async Task<IEnumerable<Style>> GetStylesAsync()
		{
			return await _context.Styles
				.Include(s => s.StyleImages).ToListAsync();
		}

		public async Task<Style> GetStyleWithStyleImagesByIdAsync(int styleId)
		{
			return (await Get(style => style.Id == styleId, includeProperties: "StyleImages" )).SingleOrDefault();
		}

		public async Task<bool> IsStyleByNameExistAsync(string styleName)
		{
			return await DoesAnyExist(style => style.Name == styleName);
		}
	}
}
