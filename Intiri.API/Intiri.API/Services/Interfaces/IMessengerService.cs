using Intiri.API.Models.DTO;

namespace Intiri.API.Services.Interfaces;

public interface IMessengerService
{
    Task<bool> SendMessage(ChatMessageInDTO chatMessageInDTO, int senderId, DateTime sentDate);
}
