using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Project;

namespace Intiri.API.Automapper
{
    public class ProjectMapperProfile : Profile
	{
		public ProjectMapperProfile()
		{
			CreateMap<ProjectNameInDTO, Project>();

			CreateMap<ProjectInDTO, Project>()
				.ForMember(cl => cl.Name, opt => opt.MapFrom(src => src.ProjectName))
				.ForMember(cl => cl.ColorPalettes, opt => opt.MapFrom(src => src.ProjectColorPaletteIds));

			CreateMap<Project, ProjectOutDTO>();
		}
	}
}
