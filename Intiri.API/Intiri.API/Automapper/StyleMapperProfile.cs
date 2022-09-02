using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Style;

namespace Intiri.API.Automapper
{
	public class StyleMapperProfile : Profile
	{
		public StyleMapperProfile()
		{
			CreateMap<StyleInDTO, Style>();
			CreateMap<Style, StyleOutDTO>();

			CreateMap<StyleImage, StyleImageOutDTO>();
			CreateMap<StyleImageInDTO, StyleImage>();
		}
	}
}
