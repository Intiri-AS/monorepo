using AutoMapper;
using Intiri.API.Models.DTO.OutputDTO.DesignerRating;
using Intiri.API.Models.Rating;

namespace Intiri.API.Automapper
{
	public class DesignerRatingMapperProfile : Profile
	{
		public DesignerRatingMapperProfile()
		{
			CreateMap<DesignerRating, RatingBasicOutDTO>();
			CreateMap<DesignerRating, RatingFullOutDTO>();
			CreateMap<DesignerReview, RatingWithCommentOutDTO>()
				 .ForMember(dr => dr.EndUserFirstName, opt => opt.MapFrom(src => src.EndUser.FirstName))
				 .ForMember(dr => dr.EndUserLastName, opt => opt.MapFrom(src => src.EndUser.LastName));
		}
	}
}
