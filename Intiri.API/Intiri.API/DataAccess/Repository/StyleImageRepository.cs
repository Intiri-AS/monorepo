﻿using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Style;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
    public class StyleImageRepository : RepositoryBase<StyleImage>, IStyleImageRepository
    {
        #region Fields

        #endregion Fields

        private readonly IMapper _mapper;

        #region Constructors

        public StyleImageRepository(DataContext context, IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }

        #endregion Constructors

        public async Task<IEnumerable<StyleImage>> GetStyleImagesAsync()
        {
            return await _context.StyleImages.Include(s => s.Style).ToListAsync();
        }

        public async Task<StyleImage> GetStyleImageByIdAsync(int imageId)
        {
            return await GetByID(imageId);
        }

        public async Task<IEnumerable<StyleImage>> GetStyleImagesByIdsListAsync(
            ICollection<int> ImageIds
        )
        {
            return await _context.StyleImages.Where(si => ImageIds.Contains(si.Id)).ToListAsync();
        }

        public async Task<IEnumerable<StyleImage>> GetStyleImagesStyleByIdsListAsync(
            ICollection<int> ImageIds
        )
        {
            return await _context.StyleImages
                .Where(si => ImageIds.Contains(si.Id))
                .Include(s => s.Style)
                .ToListAsync();
        }

        public async Task<IEnumerable<StyleImage>> GetStyleImagesByRoomAndStyleAsync(
            int RoomId,
            int StyleId
        )
        {
            return await _context.StyleImages
                .AsNoTracking()
                .Where(x => x.RoomId == RoomId && x.StyleId == StyleId)
                .Include(s => s.Style)
                .ToListAsync();
        }

        public async Task<IEnumerable<StyleImage>> GetStyleImagesByRoomAsync(int RoomId)
        {
            return await _context.StyleImages
                .AsNoTracking()
                .Where(x => x.RoomId == RoomId)
                .ToListAsync();
        }
    }
}
