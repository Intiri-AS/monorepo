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
				//.ForMember(dest => dest.PartnerContacts, pc => pc.MapFrom(p => p.PartnerContacts))
				//.ForMember(dest => dest.Products, pr => pr.MapFrom(p => p.Products));

			CreateMap<PartnerContactInDTO, PartnerContact>();
			CreateMap<PartnerContact, RegisterOutDTO>();
			
			CreateMap<PartnerContact, PartnerContactOutDTO>();
		}
	}
}
