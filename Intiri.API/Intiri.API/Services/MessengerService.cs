using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Payment;
using Intiri.API.Models.RoleNames;
using Intiri.API.Services.Interfaces;
using Messenger;
using Messenger.Messages;
using Microsoft.AspNetCore.Identity;
using System.Linq.Expressions;

namespace Intiri.API.Services;

public class MessengerService : IMessengerService
{
    private readonly IMessenger _messenger;
    private readonly IChatMessageRepository _chatMessageRepository;
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IConsultationPaymentRepository _consultationPaymentRepository;
    private readonly UserManager<User> _userManager;
    private readonly IMapper _mapper;

    public MessengerService(IMessenger messenger,
                            IUnitOfWork unitOfWork,
                            UserManager<User> userManager,
                            IMapper mapper)
    {
        _messenger = messenger;
        _chatMessageRepository = unitOfWork.ChatMessageRepository;
        _consultationPaymentRepository = unitOfWork.ConsultationPaymentRepository;
        _userRepository = unitOfWork.UserRepository;
        _unitOfWork = unitOfWork;
        _userManager = userManager;
        _mapper = mapper;
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

    public async Task<IEnumerable<ChatPersonOutDTO>> GetChatPersons(User currentUser)
    {
        ArgumentNullException.ThrowIfNull(currentUser, nameof(currentUser));

        IEnumerable<string> roleNames = await _userManager.GetRolesAsync(currentUser);

        //TODO not sure about roles. Also it should be optimized and commonized
        if (roleNames.Contains(RoleNames.InternalDesigner) || roleNames.Contains(RoleNames.ExternalDesigner))
        {
            IEnumerable<PaymentInfo> paymentInfos = await GetPayerInfosForUser(currentUser);
            IEnumerable<int> paymentIds = paymentInfos.Select(pi => pi.PayerId);

            return await _userRepository.Get(GetChatEndUserData(currentUser, paymentInfos),
                                             user => paymentIds.Contains(user.Id));
        }
        else if ((roleNames.Contains(RoleNames.FreeEndUser) || roleNames.Contains(RoleNames.PremiumEndUser)))
        {
            IEnumerable<ReceivedPaymentInfo> receivedPaymentInfos = await GetReceiverInfosForUser(currentUser);
            IEnumerable<int> paymentReceiverIds = receivedPaymentInfos.Select(pi => pi.ReceiverId);

            return await _userRepository.Get(GetChatDesignerData(currentUser, receivedPaymentInfos),
                                             user => paymentReceiverIds.Contains(user.Id));
        }

        return new List<ChatPersonOutDTO>();
    }

    private static Expression<Func<User, ChatPersonOutDTO>> GetChatEndUserData(User currentUser, IEnumerable<PaymentInfo> paymentInfos)
    {
        return user => new ChatPersonOutDTO()
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            PhotoPath = user.PhotoPath,
            LastMessageContent = user.MessagesReceived.Any(message => message.SenderId == currentUser.Id) ?
                                                                  user.MessagesReceived.Where(message => message.SenderId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault() :
                                                                  user.MessagesSent.Where(message => message.RecipientId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault(),
            LastMessageDate = user.MessagesReceived.Any(message => message.SenderId == currentUser.Id) ?
                                                                  user.MessagesReceived.Where(message => message.SenderId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault() :
                                                                  user.MessagesSent.Where(message => message.RecipientId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault(),
            ChatPeriodExpired = false
        };
    }

    private static Expression<Func<User, ChatPersonOutDTO>> GetChatDesignerData(User currentUser, IEnumerable<ReceivedPaymentInfo> receivedPaymentInfos)
    {
        return user => new ChatPersonOutDTO()
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            PhotoPath = user.PhotoPath,
            LastMessageContent = user.MessagesReceived.Any(message => message.SenderId == currentUser.Id) ?
                                                                  user.MessagesReceived.Where(message => message.SenderId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault() :
                                                                  user.MessagesSent.Where(message => message.RecipientId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault(),
            LastMessageDate = user.MessagesReceived.Any(message => message.SenderId == currentUser.Id) ?
                                                                  user.MessagesReceived.Where(message => message.SenderId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault() :
                                                                  user.MessagesSent.Where(message => message.RecipientId == currentUser.Id)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault(),
            ChatPeriodExpired = false
        };
    }

    public async Task<IEnumerable<ChatMessageOutDTO>> GetChatHistory(int firstUserId, int secondUserId)
    {
        //TODO: Process what if one of users is deleted
        return await _chatMessageRepository.Get<ChatMessageOutDTO>(_mapper,
                                                            message => (message.SenderId == firstUserId && message.RecipientId == secondUserId) ||
                                                                        (message.SenderId == secondUserId && message.RecipientId == firstUserId),
                                                            messages => messages.OrderBy(message => message.MessageSentDate));
    }

    #region Private methods

    private async Task<IEnumerable<PaymentInfo>> GetPayerInfosForUser(User currentUser)
    {
        IEnumerable<PaymentInfo> consultationPayments = await _consultationPaymentRepository.Get(payment => new PaymentInfo { PayerId = payment.PayerId, ExpirationDate = payment.ExpirationDate }, 
                                                                            payment => payment.ReceiverId == currentUser.Id);

        return consultationPayments.GroupBy(group => group.PayerId).Select(group => new PaymentInfo
        {
            PayerId = group.Key,
            ExpirationDate = group.OrderByDescending(payment => payment.ExpirationDate)
                                 .Select(payment => payment.ExpirationDate)
                                 .FirstOrDefault() 
        }
        );
    }

    private async Task<IEnumerable<ReceivedPaymentInfo>> GetReceiverInfosForUser(User currentUser)
    {
        IEnumerable<ReceivedPaymentInfo> consultationPayments = await _consultationPaymentRepository.Get(payment => new ReceivedPaymentInfo { ReceiverId = payment.ReceiverId, ExpirationDate = payment.ExpirationDate },
                                                                                                 filter: payment => payment.PayerId == currentUser.Id);

        return consultationPayments.GroupBy(group => group.ReceiverId).Select(group => new ReceivedPaymentInfo
        {
            ReceiverId = group.Key,
            ExpirationDate = group.OrderByDescending(payment => payment.ExpirationDate)
                                 .Select(payment => payment.ExpirationDate)
                                 .FirstOrDefault()
        }
        );
    }

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

public class PaymentInfo
{
    public int PayerId { get; set; }

    public DateTime ExpirationDate { get; set; }
}

public class ReceivedPaymentInfo
{
    public int ReceiverId { get; set; }

    public DateTime ExpirationDate { get; set; }
}