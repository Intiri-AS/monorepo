using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Extension;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
    [Authorize]
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
        public async Task<ActionResult> SendMessage(ChatMessageInDTO messageDTO)
        {
            bool recipientExists = await _userRepository.DoesAnyExist(user => user.Id == messageDTO.RecipientId);

            if (!recipientExists)
            {
                return BadRequest("Unknown recipient of message.");
            }

            int senderId = User.GetUserId();
            DateTime sentDate = DateTime.UtcNow;

            if (!await _messengerService.SendMessage(messageDTO, senderId, sentDate))
            {
                return BadRequest("Unable to send message to listeners.");
            }

            return Ok();
        }

        [HttpGet("chat-persons")]
        public async Task<ActionResult<IEnumerable<ChatPersonOutDTO>>> GetChatPersons()
        {
            List<ChatPersonOutDTO> chatPersonOutDTOs = new List<ChatPersonOutDTO>();
            chatPersonOutDTOs.Add(new ChatPersonOutDTO());

            await Task.CompletedTask;

            return Ok(chatPersonOutDTOs);
        }
    }
}
