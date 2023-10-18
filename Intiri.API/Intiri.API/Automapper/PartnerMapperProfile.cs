using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Partner;

namespace Intiri.API.Automapper
{
    public class PartnerMapperProfile : Profile
    {
        public PartnerMapperProfile()
        {
            CreateMap<PartnerInDTO, Partner>();
            CreateMap<Partner, PartnerOutDTO>();

            CreateMap<Partner, PartnerAllOutDTO>();

            CreateMap<PartnerContactInDTO, PartnerContact>()
                .ForMember(
                    d => d.UserName,
                    opt => opt.MapFrom(src => (src.CountryCode + src.PhoneNumber))
                );
            CreateMap<PartnerContact, RegisterOutDTO>();

            CreateMap<PartnerContact, PartnerContactOutDTO>();
        }
    }
}
