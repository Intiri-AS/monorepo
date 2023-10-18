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
            .ForMember(cl => cl.Email, opt => opt.MapFrom(src => src.Payer.Email))
            .ForMember(cl => cl.CountryCode, opt => opt.MapFrom(src => src.Payer.CountryCode))
            .ForMember(cl => cl.PhoneNumber, opt => opt.MapFrom(src => src.Payer.PhoneNumber))
            .ForMember(cl => cl.PhotoPath, opt => opt.MapFrom(src => src.Payer.PhotoPath))
            .ForMember(cl => cl.MoodboardId, opt => opt.MapFrom(src => src.Moodboard.Id))
            .ForMember(cl => cl.MoodboardStyle, opt => opt.MapFrom(src => src.Moodboard.Style.Name))
            .ForMember(cl => cl.MoodboardOfferId, opt => opt.MapFrom(src => src.MoodboardOffer.Id));

        CreateMap<ConsultationPayment, DesignerClientFullOutDTO>()
            .ForMember(cl => cl.ConsultationId, opt => opt.MapFrom(src => src.Id))
            .ForMember(cl => cl.ClientId, opt => opt.MapFrom(src => src.Payer.Id))
            .ForMember(cl => cl.FirstName, opt => opt.MapFrom(src => src.Payer.FirstName))
            .ForMember(cl => cl.LastName, opt => opt.MapFrom(src => src.Payer.LastName))
            .ForMember(cl => cl.Email, opt => opt.MapFrom(src => src.Payer.Email))
            .ForMember(cl => cl.CountryCode, opt => opt.MapFrom(src => src.Payer.CountryCode))
            .ForMember(cl => cl.PhoneNumber, opt => opt.MapFrom(src => src.Payer.PhoneNumber))
            .ForMember(cl => cl.PhotoPath, opt => opt.MapFrom(src => src.Payer.PhotoPath))
            .ForMember(cl => cl.ProjectId, opt => opt.MapFrom(src => src.Moodboard.Project.Id))
            .ForMember(cl => cl.MoodboardId, opt => opt.MapFrom(src => src.Moodboard.Id))
            .ForMember(cl => cl.MoodboardStyle, opt => opt.MapFrom(src => src.Moodboard.Style.Name))
            .ForMember(
                cl => cl.ClientInspirations,
                opt => opt.MapFrom(src => src.Payer.Inspirations)
            )
            .ForMember(cl => cl.MoodboardOfferId, opt => opt.MapFrom(src => src.MoodboardOffer.Id));
    }
}
