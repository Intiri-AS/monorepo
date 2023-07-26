using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.Material;

namespace Intiri.API.Automapper
{
	public class MaterialMapperProfile : Profile
	{
		public MaterialMapperProfile()
		{
			CreateMap<MaterialInDTO, Material>();
			CreateMap<MultipleMaterialInDTO, Material>();
			CreateMap<Material, MaterialOutDTO>()
				.ForMember(mt => mt.MaterialTypeName, opt => opt.MapFrom(src => src.MaterialType.Name));

			CreateMap<MaterialTypeInDTO, MaterialType>();
			CreateMap<MaterialType, MaterialTypeOutDTO>();
			CreateMap<MaterialType, MaterialTypeMaterialsOutDTO>();
		}
	}
}
