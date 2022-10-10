using Intiri.API.Models.DTO;
using Intiri.API.Services.Interfaces;
using Messenger;
using Messenger.Messages;

namespace Intiri.API.Services;

public class MessengerService : IMessengerService
{
    private readonly IMessenger _messenger;

    public MessengerService(IMessenger messenger)
    {
        _messenger = messenger;
    }

    public async Task<bool> SendMessageToListeners(ChatMessageInDTO chatMessageInDTO, int senderId)
    {
        PusherMessage pusherMessage = new PusherMessage()
        {
            Content = chatMessageInDTO.Content,
            RecipientId = chatMessageInDTO.RecipientId,
            SenderId = senderId,
            MessageSentDate = DateTime.UtcNow
        };

        return await _messenger.SendMessage(pusherMessage);
    }
}
