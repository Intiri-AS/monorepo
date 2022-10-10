using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Extension;
using Intiri.API.Models.DTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
    public class MessengerController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMessengerService _messengerService;

        public MessengerController(IUnitOfWork unitOfWork,
                                   IMessengerService messengerService) : base(unitOfWork)
        {
            _userRepository = unitOfWork.UserRepository;
            _messengerService = messengerService;
        }

        [HttpPost]
        public async Task<ActionResult> Message(ChatMessageInDTO messageDTO)
        {
            bool recipientExists = await _userRepository.DoesAnyExist(user => user.Id == messageDTO.RecipientId);

            if (!recipientExists)
            {
                return BadRequest("Unknown recipient of message.");
            }

            int senderId = User.GetUserId();

            if (!await _messengerService.SendMessageToListeners(messageDTO, senderId))
            {
                return BadRequest("Unable to send message to listeners.");
            }

            //TODO: Save message to DB

            return Ok();
        }
    }
}
