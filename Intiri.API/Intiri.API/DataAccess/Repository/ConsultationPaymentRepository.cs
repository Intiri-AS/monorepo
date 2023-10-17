using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Intiri.API.Models.Material;
using Intiri.API.Models.Payment;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Intiri.API.DataAccess.Repository;

public class ConsultationPaymentRepository
    : RepositoryBase<ConsultationPayment>,
        IConsultationPaymentRepository
{
    public ConsultationPaymentRepository(DataContext context)
        : base(context) { }

    public async Task<ConsultationPayment> GetFullConsultationPaymentByIdAsync(int consultationId)
    {
        return await _context.ConsultationPayment
            .Include(cp => cp.Payer)
            .ThenInclude(i => i.Inspirations)
            .Include(mu => mu.Moodboard)
            .ThenInclude(ma => ma.Materials)
            .Include(mu => mu.Moodboard)
            .ThenInclude(cp => cp.ColorPalettes)
            .Include(mu => mu.Moodboard)
            .ThenInclude(prod => prod.Products)
            .Include(mu => mu.Moodboard)
            .ThenInclude(co => co.Room)
            .Include(mu => mu.Moodboard)
            .ThenInclude(co => co.Style)
            .ThenInclude(s => s.StyleImages)
            .Include(mu => mu.Moodboard)
            .ThenInclude(co => co.Style)
            .ThenInclude(s => s.StyleImages)
            .Include(mu => mu.Moodboard)
            .ThenInclude(rd => rd.RoomDetails)
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

    public async Task<List<PaymentsPerMonthDTO>> GetAllPaymentPerMonthAsync()
    {
        var paymentsQuery = await _context.ConsultationPayment
            .Where(x => x.Id > 0)
            .GroupBy(s => new { payment = s.Amount, date = s.PaymentDate.Month })
            .Select(x => new { payment = x.Key.payment, date = x.Key.date })
            .ToListAsync();

        Dictionary<int, double> payments = new Dictionary<int, double>(12);
        for (int i = 1; i < 13; i++)
            payments[i] = 0;

        foreach (var item in paymentsQuery)
        {
            payments[item.date] += item.payment;
        }

        List<PaymentsPerMonthDTO> paymentsDTO = new List<PaymentsPerMonthDTO>();
        foreach (var item in payments)
        {
            paymentsDTO.Add(
                new PaymentsPerMonthDTO() { Month = item.Key, MonthPayment = item.Value }
            );
        }

        return paymentsDTO;
    }
}
