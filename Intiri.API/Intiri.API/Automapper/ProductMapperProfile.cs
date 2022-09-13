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

			CreateMap<Product, ProductOutDTO>();

			CreateMap<ProductInDTO, Product>();
		}
	}
}
