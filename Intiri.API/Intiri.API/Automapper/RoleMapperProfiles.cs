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
			CreateMap<UserRole, RoleDTO>()
				.ForMember(dest => dest.Name,
						   opt => opt.MapFrom(src => src.Role.Name))
				.ForMember(dest => dest.Id,
						   opt => opt.MapFrom(src => src.RoleId));

			CreateMap<Role, RoleWithPermissonsDTO>();
			CreateMap<RoleInDTO, Role>()
				.ForMember(dest => dest.Name,
						   opt => opt.MapFrom(src => src.Name.Trim()))
				.ForMember(dest => dest.NormalizedName,
						   opt => opt.MapFrom(src => src.Name.ToUpper()));
		}
	}
}
