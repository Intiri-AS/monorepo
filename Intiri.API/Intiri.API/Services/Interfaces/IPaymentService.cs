namespace Intiri.API.Services.Interfaces;

public interface IPaymentService<TPaymentSession, TPaymentDTO, TPaymentEventArgs>
{
    Task<TPaymentSession> CreatePaymentSession(TPaymentDTO paymentDTO, string host, int userId);

    Task<bool> HandlePaymentEvents(TPaymentEventArgs paymentEventArgs);
}
