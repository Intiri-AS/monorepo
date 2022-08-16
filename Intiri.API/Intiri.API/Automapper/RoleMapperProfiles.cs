using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class RoleMapperProfiles : Profile
	{
		public RoleMapperProfiles()
		{
			CreateMap<Role, RoleDTO>();
			CreateMap<Role, RoleWithPermissonsDTO>();
			CreateMap<RoleInputDTO, Role>()
				.ForMember(dest => dest.Name,
						   opt => opt.MapFrom(src => src.Name.Trim()))
				.ForMember(dest => dest.NormalizedName,
						   opt => opt.MapFrom(src => src.Name.ToUpper()));
		}
	}
}
