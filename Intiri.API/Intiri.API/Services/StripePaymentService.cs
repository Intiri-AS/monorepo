using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.Payment;
using Intiri.API.Services.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Stripe;
using Stripe.Checkout;
using NLog;
using NLog.Web;

namespace Intiri.API.Services;

public class StripePaymentService : IPaymentService<Session, StripePaymentDTO, HttpRequest>
{
    private readonly IOptions<Configuration.StripeConfiguration> _options;
    private readonly IMessengerService _messengerService;
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    private readonly Logger logger;

    const string PaymentDetails = "paymentDetails";
    const string PaymentMode = "payment";
    const string PaymentStatus = "paid";

    public StripePaymentService(IOptions<Configuration.StripeConfiguration> options,
                                IMessengerService messengerService,
                                IUnitOfWork unitOfWork,
                                IMapper mapper)
    {
        _options = options;
        _messengerService = messengerService;
        _userRepository = unitOfWork.UserRepository;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
    }

    public async Task<Session> CreatePaymentSession(StripePaymentDTO paymentDTO, string host, int userId)
    {
        ArgumentNullException.ThrowIfNull(host, nameof(host));
        ArgumentNullException.ThrowIfNull(paymentDTO, nameof(paymentDTO));

        

        //attach payer user to dto. Important later when handling events, because API is called from outside platform (from stripe)
        paymentDTO.PayerId = userId;

        //string domain = $"https://{host}/";
        string domain = $"{host}/";

        string Description = "";

        User customer = await _userRepository.GetByID(paymentDTO.PayerId);
        if (customer != null)
        {
            Description = Description + "Customer: " + customer.FirstName + " " + customer.LastName + ", Customer Phone: " + customer.CountryCode + customer.PhoneNumber + ", ";
        }

        User designer = await _userRepository.GetByID(paymentDTO.ReceiverId);
        if (designer != null)
        {
            Description = Description + "Designer: " + designer.FirstName + " " + designer.LastName;
        }

        Dictionary<string, string> metadata = new Dictionary<string, string>();
        metadata.Add(PaymentDetails, JsonConvert.SerializeObject(paymentDTO));

        SessionCreateOptions options = CreateSessionOptions(paymentDTO, domain, metadata, Description);
        var service = new SessionService();

        return await Task.FromResult(service.Create(options));
    }

    public async Task<bool> HandlePaymentEvents(HttpRequest paymentEventArgs)
    {
        ArgumentNullException.ThrowIfNull(paymentEventArgs, nameof(paymentEventArgs));

        string webhook_endpoint_secret = _options.Value.WebhookEndpointSecret;
        try
        {
            string paymentDetailsJson = await new StreamReader(paymentEventArgs.Body).ReadToEndAsync();
            
            var stripeEvent = EventUtility.ParseEvent(paymentDetailsJson, false);
            
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
                await SendMessageAsPaymentConfirmation(paymentDTO);
            }
            else if (stripeEvent.Type == Events.CheckoutSessionAsyncPaymentSucceeded)
            {
                await SavePayment(paymentDTO);
                await SendMessageAsPaymentConfirmation(paymentDTO);
            }
            else if (stripeEvent.Type == Events.CheckoutSessionAsyncPaymentFailed)
            {
                //TODO: handle failure
                logger.Info("Stripe payment failed", stripeEvent);
            }
        }
        catch (Exception exception)
        {
            logger.Error("Exception occurred in HandlePaymentEvents", exception);
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

    private async Task SendMessageAsPaymentConfirmation(StripePaymentDTO paymentDTO)
    {
        User payer = await _userRepository.GetByID(paymentDTO.PayerId);
        User receiver = await _userRepository.GetByID(paymentDTO.ReceiverId);

        if (payer == null || receiver == null)
        {
            throw new ArgumentNullException("Payer or payment receiver are null.");
        }

        string consultation = paymentDTO.NumberOfConsultations == 1 ? "consultation" : "consultations";

        ChatMessageInDTO message = new ChatMessageInDTO()
        {
            RecipientId = payer.Id,
            Content = $"Hi {payer.FirstName}. I received your payment ({paymentDTO.Amount / 100} NOK) for {paymentDTO.NumberOfConsultations} {consultation}. " +
            $"We can use this chat to communicate, but also we can use phone numbers (your phone number +{payer.CountryCode}  {payer.PhoneNumber} and my phone number +{receiver.CountryCode}  {receiver.PhoneNumber})"
        };

        await _messengerService.SendMessage(message, receiver.Id, DateTime.UtcNow);
    }

    private static SessionCreateOptions CreateSessionOptions(StripePaymentDTO paymentDTO, string domain, Dictionary<string, string> metadata, string Description)
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
            Locale = paymentDTO.Locale != null ? paymentDTO.Locale : "en",
            SuccessUrl = domain + paymentDTO.SuccessUrlPath,
            CancelUrl = domain + (paymentDTO.CancelUrlPath != null ? paymentDTO.CancelUrlPath : ""),
            PaymentIntentData = new SessionPaymentIntentDataOptions { Description = Description }
        };
    }

    #endregion Private methods
}
