using Intiri.API.Models.Payment;

namespace Intiri.API.DataAccess.Repository.Interface;

public interface IConsultationPaymentRepository : IRepositoryBase<ConsultationPayment>
{
	Task<ConsultationPayment> GetFullConsultationPaymentByIdAsync(int consultationId);
	Task<ConsultationPayment> GetBaseConsultationPaymentByIdAsync(int consultationId);
}
