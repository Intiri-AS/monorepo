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
				.ForMember(pr => pr.PartnerId, opt => opt.MapFrom(src => src.Partner.Id))
				.ForMember(ma => ma.MaterialId, opt => opt.MapFrom(src => src.Material.Id))
				.ForMember(pt => pt.ProductTypeId, opt => opt.MapFrom(src => src.ProductType.Id));

			CreateMap<ProductInDTO, Product>(); 
			CreateMap<MultipleProductInDTO, Product>(); 
		}
	}
}
