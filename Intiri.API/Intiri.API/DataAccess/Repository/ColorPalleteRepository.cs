﻿using AutoMapper;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository
{
	public class ColorPalleteRepository: RepositoryBase<ColorPallete>, IColorPalleteRepository
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constrouctors

		public ColorPalleteRepository(DataContext context, IMapper mapper): base(context)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		public async Task<IEnumerable<ColorPallete>> GetColorPalletesAsync()
		{
			return await _context.ColorPalletes.ToListAsync();
		}

		#endregion Public methods
	}
}