using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;

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
