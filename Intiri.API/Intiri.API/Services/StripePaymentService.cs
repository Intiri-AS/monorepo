using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Intiri.API.Models.Payment;
using Intiri.API.Services.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Stripe;
using Stripe.Checkout;

namespace Intiri.API.Services;

public class StripePaymentService : IPaymentService<Session, StripePaymentDTO, HttpRequest>
{
    private readonly IOptions<Configuration.StripeConfiguration> _options;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    const string PaymentDetails = "paymentDetails";
    const string PaymentMode = "payment";
    const string PaymentStatus = "paid";

    public StripePaymentService(IOptions<Configuration.StripeConfiguration> options,
                                IUnitOfWork unitOfWork,
                                IMapper mapper)
    {
        _options = options;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public Task<Session> CreatePaymentSession(StripePaymentDTO paymentDTO, string host, int userId)
    {
        ArgumentNullException.ThrowIfNull(host, nameof(host));
        ArgumentNullException.ThrowIfNull(paymentDTO, nameof(paymentDTO));

        //attach payer user to dto. Important later when handling events, because API is called from outside platform (from stripe)
        paymentDTO.PayerId = userId;

        string domain = $"https://{host}/";

        Dictionary<string, string> metadata = new Dictionary<string, string>();
        metadata.Add(PaymentDetails, JsonConvert.SerializeObject(paymentDTO));

        SessionCreateOptions options = CreateSessionOptions(paymentDTO, domain, metadata);
        var service = new SessionService();

        return Task.FromResult(service.Create(options));
    }

    public async Task<bool> HandlePaymentEvents(HttpRequest paymentEventArgs)
    {
        ArgumentNullException.ThrowIfNull(paymentEventArgs, nameof(paymentEventArgs));

        string webhook_endpoint_secret = _options.Value.WebhookEndpointSecret;
        try
        {
            string paymentDetailsJson = await new StreamReader(paymentEventArgs.Body).ReadToEndAsync();
            var stripeEvent = EventUtility.ConstructEvent(paymentDetailsJson, paymentEventArgs.Headers["Stripe-Signature"], webhook_endpoint_secret);
            Session session = stripeEvent.Data.Object as Session;
            StripePaymentDTO paymentDTO = null;

            string jsonPaymentDetails;
            if (session != null && session.Metadata != null && session.Metadata.TryGetValue(PaymentDetails, out jsonPaymentDetails))
            {
                paymentDTO = JsonConvert.DeserializeObject(jsonPaymentDetails, typeof(StripePaymentDTO)) as StripePaymentDTO;
            }

            if (stripeEvent.Type == Events.CheckoutSessionCompleted && session.PaymentStatus == PaymentStatus)
            {
                await SavePayment(paymentDTO);
            }
            else if (stripeEvent.Type == Events.CheckoutSessionAsyncPaymentSucceeded)
            {
                await SavePayment(paymentDTO);
            }
            else if (stripeEvent.Type == Events.CheckoutSessionAsyncPaymentFailed)
            {
                //TODO: handle failure
            }
        }
        catch (Exception)
        {
            //TODO: log exception
            return false;
        }

        return true;
    }

    #region Private methods

    private async Task SavePayment(StripePaymentDTO paymentDTO)
    {
        ConsultationPayment payment = _mapper.Map<ConsultationPayment>(paymentDTO);

        _unitOfWork.ConsultationPaymentRepository.Insert(payment);
        await _unitOfWork.SaveChanges();
    }

    private static SessionCreateOptions CreateSessionOptions(StripePaymentDTO paymentDTO, string domain, Dictionary<string, string> metadata)
    {
        return new SessionCreateOptions
        {
            LineItems = new List<SessionLineItemOptions>
            {
                new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmount = paymentDTO.Amount,
                        Currency = "nok",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = paymentDTO.Name,
                        },
                    },
                    Quantity = 1,
                },
            },
            Mode = PaymentMode,
            Metadata = metadata,
            Locale = paymentDTO.Locale,
            SuccessUrl = domain + paymentDTO.SuccessUrlPath,
            CancelUrl = domain + (paymentDTO.CancelUrlPath != null ? paymentDTO.CancelUrlPath : "")
        };
    }

    #endregion Private methods
}
