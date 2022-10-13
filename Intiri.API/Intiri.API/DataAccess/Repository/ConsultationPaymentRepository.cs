using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.Payment;

namespace Intiri.API.DataAccess.Repository;

public class ConsultationPaymentRepository : RepositoryBase<ConsultationPayment>, IConsultationPaymentRepository
{
    public ConsultationPaymentRepository(DataContext context) : base(context)
    {
    }
}
