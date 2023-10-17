using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;

namespace Intiri.API.Automapper
{
    public class StyleMapperProfile : Profile
    {
        public StyleMapperProfile()
        {
            CreateMap<StyleInDTO, Style>();
            CreateMap<Style, StyleOutDTO>();
            CreateMap<Style, StyleWithImagesOutDTO>();

            CreateMap<StyleImageInDTO, StyleImage>();
            CreateMap<StyleMultipleImageInDTO, StyleImage>();
            CreateMap<StyleImage, StyleImageOutDTO>()
                .ForMember(si => si.StyleName, opt => opt.MapFrom(src => src.Style.Name));
        }
    }
}
