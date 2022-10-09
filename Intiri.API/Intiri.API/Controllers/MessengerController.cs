using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using PusherServer;

namespace Intiri.API.Controllers
{
    public class MessengerController : BaseApiController
    {

        public MessengerController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            
        }


        [HttpPost]
        public async Task<ActionResult> Message(MessageDTO messageDTO)
        {
            var options = new PusherOptions
            {
                Cluster = "eu",
                Encrypted = true
            };

            var pusher = new Pusher(
              "1488805",
              "0233be6c2ef5fb26cc7d", // TODO: keep this keys, secrets in env file
              "bab67a1d5e732b7ccfec",
              options);

            await pusher.TriggerAsync(
              "chat",
              "message",
              new { 
                  username = messageDTO.Username, 
                  message = messageDTO.Message 
              });

            return Ok(new string[] { });
        }
    }
}
