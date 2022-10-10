using Intiri.API.Models.DTO;

namespace Intiri.API.Services.Interfaces;

public interface IMessengerService
{
    Task<bool> SendMessageToListeners(ChatMessageInDTO chatMessageInDTO, int senderId);
}
