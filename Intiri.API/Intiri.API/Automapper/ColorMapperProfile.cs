using AutoMapper;
using Intiri.API.Models.DTO;
using Intiri.API.Models.IntiriColor;

namespace Intiri.API.Automapper
{
	public class ColorMapperProfile : Profile
	{
		public ColorMapperProfile()
		{
			CreateMap<ColorDTO, Color>();
			CreateMap<Color, ColorDTO>();
		}
	}
}
