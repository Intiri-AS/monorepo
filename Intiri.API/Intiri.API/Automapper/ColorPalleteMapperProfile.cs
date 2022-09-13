using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class ColorPalleteMapperProfile : Profile
	{
		public ColorPalleteMapperProfile()
		{
			CreateMap<ColorPalleteInDTO, ColorPallete>();
			CreateMap<ColorPallete, ColorPalleteOutDTO>();
		}
	}
}
