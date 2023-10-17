using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO;

namespace Intiri.API.Automapper
{
    public class ConsultationMapperProfile : Profile
    {
        public ConsultationMapperProfile()
        {
            CreateMap<ConsulatationDTO, Consultation>();
            CreateMap<Consultation, ConsulatationDTO>();
        }
    }
}
