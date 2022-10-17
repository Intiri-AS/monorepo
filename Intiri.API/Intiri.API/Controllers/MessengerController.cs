using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers;

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
    public async Task<ActionResult> SendMessage([FromForm] ChatMessageInDTO messageDTO)
    {
        bool recipientExists = await _userRepository.DoesAnyExist(user => user.Id == messageDTO.RecipientId);

        if (!recipientExists)
        {
            return BadRequest("Unknown recipient of message.");
        }

        int senderId = User.GetUserId();

        if (senderId == messageDTO.RecipientId)
        {
            return BadRequest("You cannot send message to yourself");
        }

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
        User user = await _userRepository.GetByID(User.GetUserId());

        IEnumerable<ChatPersonOutDTO> chatPersonOutDTOs = await _messengerService.GetChatPersons(user);

        return Ok(chatPersonOutDTOs);
    }

    [HttpGet("chat-history/{chatUserId}")]
    public async Task<ActionResult<IEnumerable<ChatMessageOutDTO>>> GetChatHistory(int chatUserId)
    {
        IEnumerable<ChatMessageOutDTO> messages = await _messengerService.GetChatHistory(User.GetUserId(), chatUserId);

        return Ok(messages);
    }
}
