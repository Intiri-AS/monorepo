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
			CreateMap<ProjectInDTO, Project>();
			CreateMap<Project, ProjectOutDTO>();
		}
	}
}
