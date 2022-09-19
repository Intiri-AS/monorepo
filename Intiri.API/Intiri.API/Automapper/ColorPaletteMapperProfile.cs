using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class ColorPaletteMapperProfile : Profile
	{
		public ColorPaletteMapperProfile()
		{
			CreateMap<ColorPaletteInDTO, ColorPalette>();
			CreateMap<ColorPalette, ColorPaletteOutDTO>();
		}
	}
}
