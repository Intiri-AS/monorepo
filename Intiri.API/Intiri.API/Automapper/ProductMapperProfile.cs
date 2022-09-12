using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Product;

namespace Intiri.API.Automapper
{
	public class ProductMapperProfile : Profile
	{
		public ProductMapperProfile()
		{
			CreateMap<ProductType, ProductTypeOutDTO>();
			CreateMap<ProductTypeInDTO, ProductType>();

			CreateMap<Product, ProductOutDTO>()
				.ForPath(po => po.ProductType, opt => opt.MapFrom(src => src.Type.Id));


			CreateMap<ProductInDTO, Product>()
				.ForPath(product => product.Type.Id, opt => opt.MapFrom(src => src.ProductTypeId))
				.ForPath(product => product.Type.Name, opt => opt.MapFrom(src => src.Name));
		}
	}
}
