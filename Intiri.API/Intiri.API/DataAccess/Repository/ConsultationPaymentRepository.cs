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

	public async Task<ConsultationPayment> GetFullConsultationPaymentByIdAsync(int consultationId)
	{
		return await _context.ConsultationPayment
				.Include(cp => cp.Payer).ThenInclude(i => i.Inspirations)
				.Include(mu => mu.Moodboard).ThenInclude(ma => ma.Materials)
				.Include(mu => mu.Moodboard).ThenInclude(cp => cp.ColorPalettes)
				.Include(mu => mu.Moodboard).ThenInclude(prod => prod.Products)
				.Include(mu => mu.Moodboard).ThenInclude(co => co.Room)
				.Include(mu => mu.Moodboard).ThenInclude(co => co.Style).ThenInclude(s => s.StyleImages)
				.Include(mu => mu.Moodboard).ThenInclude(proj => proj.Project)
				.SingleOrDefaultAsync(cp => cp.Id == consultationId);
	}

	public async Task<ConsultationPayment> GetBaseConsultationPaymentByIdAsync(int consultationId)
	{
		return await _context.ConsultationPayment
				.Include(cp => cp.Payer)
				.Include(cp => cp.Receiver)
				.Include(mu => mu.Moodboard)
				.SingleOrDefaultAsync(cp => cp.Id == consultationId);
	}
}
