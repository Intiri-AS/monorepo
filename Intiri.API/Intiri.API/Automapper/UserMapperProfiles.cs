using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class UserMapperProfiles : Profile
	{
		public UserMapperProfiles()
		{
			CreateMap<User, UserOutDTO>();
			CreateMap<UserOutDTO, User>();
			CreateMap<RegisterDTO, User>().ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.PhoneNumber));
			CreateMap<UserUpdateInDTO, User>();
			CreateMap<UserUpdateInDTO, User>();
		}
	}
}
