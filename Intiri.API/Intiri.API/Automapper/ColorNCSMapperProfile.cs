using AutoMapper;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;

namespace Intiri.API.Automapper
{
    public class ColorNCSMapperProfile : Profile
    {
        public ColorNCSMapperProfile()
        {
            CreateMap<ColorNCSOutDTO, ColorNCS>();
            CreateMap<ColorNCS, ColorNCSOutDTO>();
        }
    }
}
