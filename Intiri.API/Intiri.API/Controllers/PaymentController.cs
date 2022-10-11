using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Microsoft.AspNetCore.Mvc;
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
    }
}
