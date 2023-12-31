﻿using AutoMapper;
using Grpc.Core;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Stripe;
using System.Diagnostics;
using System;
using Newtonsoft.Json;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.DataAccess.Repository
{
    public class MoodboardRepository : RepositoryBase<Moodboard>, IMoodboardRepository
    {
        #region Fields

        private readonly IMapper _mapper;
        private readonly SQLHelper _sQLHelper;

        #endregion Fields

        #region Constructors

        public MoodboardRepository(DataContext dataContext, IMapper mapper, SQLHelper sQLHelper)
            : base(dataContext)
        {
            _mapper = mapper;
            _sQLHelper = sQLHelper;
        }

        #endregion Constructors

        #region Public methods

        public async Task<int> GetMoodboardsCountAsync()
        {
            return await _context.Moodboards.Where(m => !(m is ClientMoodboard)).CountAsync();
        }

        public async Task<Dictionary<int, int>> GetClientMoodboardStylesCountAsync()
        {
            List<int> stylesIds = await _context.Moodboards
                .OfType<ClientMoodboard>()
                .Include(s => s.Style)
                .Select(s => s.Style.Id)
                .ToListAsync();

            Dictionary<int, int> kvpList = stylesIds
                .GroupBy(x => x)
                .Select(g => new { Value = g.Key, Count = g.Count() })
                .OrderByDescending(x => x.Count)
                .ToDictionary(x => x.Value, x => x.Count);

            return kvpList;
        }

        public async Task<Dictionary<int, int>> GetMoodboardStylesCountAsync()
        {
            List<int> stylesIds = await _context.Moodboards
                .Include(s => s.Style)
                .Select(s => s.Style.Id)
                .ToListAsync();

            Dictionary<int, int> kvpList = stylesIds
                .GroupBy(x => x)
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
                .OrderByDescending(x => x.Id)
                .AsNoTracking()
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
            return await _context.Moodboards
                .OfType<ClientMoodboard>()
                .Include(cp => cp.ConsultationPaymentSend)
                .Include(cp => cp.ConsultationPaymentReceive)
                .SingleOrDefaultAsync(cm => cm.Id == moodboardId);
        }

        public async Task<IEnumerable<ClientMoodboard>> GetClientMoodboardsByIdsList(
            ICollection<int> ids
        )
        {
            return await _context.Moodboards
                .OfType<ClientMoodboard>()
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
            return await _context.Moodboards
                .AsNoTracking()
                .Where(m => roomId == m.Room.Id && m.IsTemplate == true)
                .Include(m => m.Style)
                .Include(cp => cp.ColorPalettes)
                .Include(m => m.StyleImages)
                .Include(m => m.Products.Take(1))
                .AsNoTracking()
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

        //public async Task<Moodboard> GetFullMoodboardByIdOptimized(int moodboardId)
        //{
        //	return await _context.Moodboards.AsNoTracking()
        //		.Include(m => m.Materials)
        //		.Include(m => m.Products)
        //		.Include(m => m.ColorPalettes)
        //		.Include(m => m.Style)
        //		.Include(m => m.StyleImages)
        //		.Where(m => moodboardId == m.Id)
        //		.AsNoTracking()
        //		.FirstOrDefaultAsync();
        //}

        public async Task<MoodboardOutDTO> GetFullMoodboardByIdOptimized(int moodboardId)
        {
            MoodboardOutDTO moodboard = null;

            string responce = await _sQLHelper.GetJsonObject(
                "GetFullMoodboardById",
                new object[,]
                {
                    { "moodboardId", moodboardId },
                }
            );

            moodboard = JsonConvert.DeserializeObject<MoodboardOutDTO>(responce);

            return moodboard;
        }

        public async Task<ClientMoodboardOutDTO> GetClientMoodboardOptimizedFromSPById(
            int moodboardId
        )
        {
            ClientMoodboardOutDTO moodboard = null;

            string responce = await _sQLHelper.GetJsonObject(
                "GetFullMoodboardById",
                new object[,]
                {
                    { "moodboardId", moodboardId },
                }
            );

            moodboard = JsonConvert.DeserializeObject<ClientMoodboardOutDTO>(responce);

            return moodboard;
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

        public async Task<IEnumerable<Moodboard>> GetMoodboardStyleFamilyAsync(
            int styleId,
            int roomId
        )
        {
            return await _context.Moodboards
                .AsNoTracking()
                .Include(m => m.Style)
                .Include(m => m.Products.Take(1))
                .Include(m => m.StyleImages.Take(2))
                .Include(m => m.Room)
                .Include(m => m.ColorPalettes)
                .Where(m => m.Style.Id == styleId && m.Room.Id != roomId && m.IsTemplate == true)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<ClientMoodboard> GetClientMoodboardOptimizedById(int moodboardId)
        {
            return await _context.Moodboards
                .OfType<ClientMoodboard>()
                .AsNoTracking()
                .Include(m => m.Room)
                .Include(m => m.Materials)
                .Include(m => m.Products)
                .Include(m => m.ColorPalettes)
                .Include(m => m.Style)
                .Include(m => m.StyleImages)
                .Include(m => m.Project)
                .SingleOrDefaultAsync(cm => cm.Id == moodboardId);
        }

        public async Task<string> GetMoodboardSlotInfo(int moodboardId)
        {
            return await _context.Moodboards
                .AsNoTracking()
                .Where(m => moodboardId == m.Id)
                .Select(m => m.SlotInfo)
                .FirstOrDefaultAsync();
        }

        #endregion Public methods
    }
}
