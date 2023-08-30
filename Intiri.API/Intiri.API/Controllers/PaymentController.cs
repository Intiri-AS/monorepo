using Intiri.API.Configuration;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models.DTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe.Checkout;

namespace Intiri.API.Controllers;

public class PaymentController : BaseApiController
{
    private readonly IOptions<HostingConfiguration> _hostConfig;
    private readonly IPaymentService<Session, StripePaymentDTO, HttpRequest> _paymentService;

    public PaymentController(IUnitOfWork unitOfWork,
                             IOptions<HostingConfiguration> options,
                             IPaymentService<Session, StripePaymentDTO, HttpRequest> paymentService) : base(unitOfWork)
    {
        _hostConfig = options;
        _paymentService = paymentService;
    }

    [Authorize]
    [HttpPost]
    [ApiExplorerSettings(IgnoreApi = true)]
    public async Task<ActionResult<Session>> Payment(StripePaymentDTO paymentDTO)
    {
        //string host = _hostConfig.Value.Host != null ? _hostConfig.Value.Host : Request.Host.ToString();
        Session session = await _paymentService.CreatePaymentSession(paymentDTO, paymentDTO.Domain, User.GetUserId());
        return Ok(await Task.FromResult(session));
    }

    [HttpPost("/stripe-webhook")]
    public async Task<ActionResult> StripeWebhookHandler()
    {
        bool eventSuccessfullyHandled =  await _paymentService.HandlePaymentEvents(Request);
        return eventSuccessfullyHandled ? Ok() : BadRequest();
    }
}
