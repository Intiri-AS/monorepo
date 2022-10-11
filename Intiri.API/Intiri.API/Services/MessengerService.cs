using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.DTO;
using Intiri.API.Services.Interfaces;
using Messenger;
using Messenger.Messages;

namespace Intiri.API.Services;

public class MessengerService : IMessengerService
{
    private readonly IMessenger _messenger;
    private readonly IChatMessageRepository _chatMessageRepository;
    private readonly IUnitOfWork _unitOfWork;

    public MessengerService(IMessenger messenger,
                            IUnitOfWork unitOfWork)
    {
        _messenger = messenger;
        _chatMessageRepository = unitOfWork.ChatMessageRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<bool> SendMessage(ChatMessageInDTO chatMessageInDTO, int senderId, DateTime sentDate)
    {
        ChatMessage chatMessage = CreateChatMessage(chatMessageInDTO, senderId, sentDate);
        _chatMessageRepository.Insert(chatMessage);

        if (!await _unitOfWork.SaveChanges())
        {
            return await Task.FromResult(false);
        }

        PusherMessage pusherMessage = CreatePusherMessage(chatMessage);
        return await _messenger.SendMessage(pusherMessage);
    }

    #region Private methods

    private PusherMessage CreatePusherMessage(ChatMessage chatMessage)
    {
        return new PusherMessage()
        {
            Content = chatMessage.Content,
            RecipientId = chatMessage.RecipientId,
            SenderId = chatMessage.SenderId,
            MessageSentDate = chatMessage.MessageSentDate
        };
    }

    private ChatMessage CreateChatMessage(ChatMessageInDTO chatMessageInDTO, int senderId, DateTime sentDate)
    {
        return new ChatMessage()
        {
            SenderId = senderId,
            RecipientId = chatMessageInDTO.RecipientId,
            MessageSentDate = sentDate,
            Content = chatMessageInDTO.Content,
            SenderDeleted = false,
            RecipientDeleted = false
        };
    }

    #endregion Private methods
}
