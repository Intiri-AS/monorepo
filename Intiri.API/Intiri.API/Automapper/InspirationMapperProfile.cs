using AutoMapper;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO;
using Intiri.API.Models.Payment;
using Intiri.API.Models;

namespace Intiri.API.Automapper
{
	public class InspirationMapperProfile : Profile
	{
		public InspirationMapperProfile()
		{
			CreateMap<Inspiration, InspirationOutDTO>();
		}
	}
}
