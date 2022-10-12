using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using NLog.Fluent;
using Stripe;
using Stripe.Checkout;

namespace Intiri.API.Controllers
{
    public class PaymentController : BaseApiController
    {

        public PaymentController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {}


        [HttpPost]
        public ActionResult Payment(PaymentDTO paymentDTO)
        {

            var domain = "http://localhost:8100"; // should be updated
            var options = new SessionCreateOptions
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
                Mode = "payment",
                //Locale = paymentDTO.Locale; // should get this from client ('nb' or 'en')
                SuccessUrl = domain + "/my-intiri",
                CancelUrl = domain + "/my-intiri",
            };
            var service = new SessionService();
            //Response.Headers.Add("Location", session.Url);
            //return new StatusCodeResult(303);

            Session session = service.Create(options);
            return Ok(session);
        }

        [HttpPost("/stripe-webhook")]
        public async Task<ActionResult> StripeWebhookHandler()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
            //var webhook_endpoint_secret = "whsec_738dfde9f640c33fbbcb7028dfca567a6809d1754bc73769a3f990efcdc52f4d"; // local
            var webhook_endpoint_secret = "whsec_HxW9E653T8IFgutuqcgqBaOes6fJVAXX"; // deployed

            try
            {
                var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], webhook_endpoint_secret);

                if(stripeEvent.Type == Events.PaymentIntentSucceeded)
                {
                    var session = stripeEvent.Data.Object as Session;
                    // TODO: implement method/logic for saving payment info
                    //await savePayment();
                }
                else if(stripeEvent.Type == Events.CheckoutSessionAsyncPaymentSucceeded)
                {
                    var session = stripeEvent.Data.Object as Session;
                    // TODO: implement method/logic for saving payment info
                    //await savePayment();
                }
                else if(stripeEvent.Type == Events.CheckoutSessionAsyncPaymentFailed)
                {
                    var session = stripeEvent.Data.Object as Session;
                    // handle failure
                } else
                {
                    Console.WriteLine("Unhandled event type: {0}", stripeEvent.Type);
                }

                return Ok();
            }
            catch (StripeException e)
            {
                return BadRequest();
            }
        }
    }
}
