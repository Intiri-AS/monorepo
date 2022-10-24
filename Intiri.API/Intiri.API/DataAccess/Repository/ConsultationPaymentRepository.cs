using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.Material;
using Intiri.API.Models.Payment;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess.Repository;

public class ConsultationPaymentRepository : RepositoryBase<ConsultationPayment>, IConsultationPaymentRepository
{
    public ConsultationPaymentRepository(DataContext context) : base(context)
    {
    }

	public async Task<ConsultationPayment> GetFullConsultationByIdAsync(int consultationId)
	{
		return await _context.ConsultationPayment
				.Include(cp => cp.Payer).ThenInclude(i => i.Inspirations)
				.Include(mu => mu.Moodboard).ThenInclude(ma => ma.Materials)
				.Include(mu => mu.Moodboard).ThenInclude(co => co.ColorPalettes)
				.Include(mu => mu.Moodboard).ThenInclude(co => co.Products)
				.SingleOrDefaultAsync(cp => cp.Id == consultationId);
		//return (await Get(materialType => materialType.Id == materialTypeId, includeProperties: "Materials")).SingleOrDefault();
	}
}
