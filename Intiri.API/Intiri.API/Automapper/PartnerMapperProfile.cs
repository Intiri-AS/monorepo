using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class PartnerMapperProfile : Profile
	{
		public PartnerMapperProfile()
		{
			CreateMap<PartnerInDTO, Partner>();
			CreateMap<Partner, PartnerOutDTO>();

			CreateMap<PartnerContactInDTO, PartnerContact>();
			CreateMap<PartnerContact, RegisterOutDTO>();
			
			CreateMap<PartnerContact, PartnerContactOutDTO>();
		}
	}
}
