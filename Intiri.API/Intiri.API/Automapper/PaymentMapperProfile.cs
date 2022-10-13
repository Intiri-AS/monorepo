using AutoMapper;
using Intiri.API.Models.DTO;
using Intiri.API.Models.Payment;

namespace Intiri.API.Automapper;

public class PaymentMapperProfile : Profile
{
	public PaymentMapperProfile()
	{
		CreateMap<StripePaymentDTO, ConsultationPayment>();
	}
}
