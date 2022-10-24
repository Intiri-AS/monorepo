using AutoMapper;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Payment;

namespace Intiri.API.Automapper;

public class PaymentMapperProfile : Profile
{
	public PaymentMapperProfile()
	{
		CreateMap<StripePaymentDTO, ConsultationPayment>();
		
		CreateMap<ConsultationPayment, DesignerClientOutDTO>()
			.ForMember(cl => cl.ConsultationId, opt => opt.MapFrom(src => src.Id))
			.ForMember(cl => cl.ClientId, opt => opt.MapFrom(src => src.Payer.Id))
			.ForMember(cl => cl.FirstName, opt => opt.MapFrom(src => src.Payer.FirstName))
			.ForMember(cl => cl.LastName, opt => opt.MapFrom(src => src.Payer.LastName))
			.ForMember(cl => cl.PhotoPath, opt => opt.MapFrom(src => src.Payer.PhotoPath))
			.ForMember(cl => cl.MoodboardId, opt => opt.MapFrom(src => src.Moodboard.Id))
			.ForMember(cl => cl.MoodboardStyle, opt => opt.MapFrom(src => src.Moodboard.Style.Name));


		CreateMap<ConsultationPayment, DesignerClientFullOutDTO>()
			.ForMember(cl => cl.ConsultationId, opt => opt.MapFrom(src => src.Id))
			.ForMember(cl => cl.ClientId, opt => opt.MapFrom(src => src.Payer.Id))
			.ForMember(cl => cl.FirstName, opt => opt.MapFrom(src => src.Payer.FirstName))
			.ForMember(cl => cl.LastName, opt => opt.MapFrom(src => src.Payer.LastName))
			.ForMember(cl => cl.PhotoPath, opt => opt.MapFrom(src => src.Payer.PhotoPath))
			.ForMember(cl => cl.MoodboardId, opt => opt.MapFrom(src => src.Moodboard.Id))
			.ForMember(cl => cl.MoodboardStyle, opt => opt.MapFrom(src => src.Moodboard.Style.Name))
			.ForMember(cl => cl.ClientInspirations, opt => opt.MapFrom(src => src.Payer.Inspirations));

	}
}
