using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Services.Interfaces;

public interface IMessengerService
{
    Task<bool> SendMessage(ChatMessageInDTO chatMessageInDTO, int senderId, DateTime sentDate);

    Task<IEnumerable<ChatPersonOutDTO>> GetChatPersons(User currentUser);

    Task<IEnumerable<ChatMessageOutDTO>> GetChatHistory(int firstUserId, int secondUserId);
}
