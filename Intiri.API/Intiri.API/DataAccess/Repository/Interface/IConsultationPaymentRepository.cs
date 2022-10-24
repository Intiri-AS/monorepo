using Intiri.API.Models.Payment;

namespace Intiri.API.DataAccess.Repository.Interface;

public interface IConsultationPaymentRepository : IRepositoryBase<ConsultationPayment>
{
	Task<ConsultationPayment> GetFullConsultationByIdAsync(int consultationId);
}
