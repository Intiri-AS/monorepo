using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.CommonNames;
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

public readonly record struct PaymentData(int ParticipantId, DateTime ExpirationDate);

public class MessengerService : IMessengerService
{
    private readonly IMessenger _messenger;
    private readonly IChatMessageRepository _chatMessageRepository;
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IConsultationPaymentRepository _consultationPaymentRepository;
    private readonly UserManager<User> _userManager;
    private readonly ICloudinaryService _fileUploadService;
    private readonly IMapper _mapper;

    public MessengerService(IMessenger messenger,
                            IUnitOfWork unitOfWork,
                            UserManager<User> userManager,
                            ICloudinaryService fileUploadService,
                            IMapper mapper)
    {
        _messenger = messenger;
        _chatMessageRepository = unitOfWork.ChatMessageRepository;
        _consultationPaymentRepository = unitOfWork.ConsultationPaymentRepository;
        _userRepository = unitOfWork.UserRepository;
        _unitOfWork = unitOfWork;
        _userManager = userManager;
        _fileUploadService = fileUploadService;
        _mapper = mapper;
    }

    public async Task<bool> SendMessage(ChatMessageInDTO chatMessageInDTO, int senderId, DateTime sentDate)
    {
        if (chatMessageInDTO.Content is null && chatMessageInDTO.Attachments is null)
        {
            throw new ArgumentException($"Both {nameof(chatMessageInDTO.Content)} and {nameof(chatMessageInDTO.Attachments)} are null.");
        }

        //TODO: Validations - message can be sent between designer and end user and only if there is payment that is not expired.

        ChatMessage chatMessage = CreateChatMessage(chatMessageInDTO, senderId, sentDate);
        //upload attachments (if error happen exception will be thrown and caught in upper layer - message won't be stored and pushed to listeners)
        chatMessage.Attachments = await UploadMessageAttachments(chatMessageInDTO.Attachments);

        PusherMessage pusherMessage = CreatePusherMessage(chatMessage);
        await _messenger.SendMessage(pusherMessage);

        _chatMessageRepository.Insert(chatMessage);
        return await _unitOfWork.SaveChanges();
    }

    public async Task<IEnumerable<ChatPersonOutDTO>> GetChatPersons(User currentUser)
    {
        ArgumentNullException.ThrowIfNull(currentUser, nameof(currentUser));

        IEnumerable<string> roleNames = await _userManager.GetRolesAsync(currentUser);
        IEnumerable<PaymentData> paymentDataInfos = new List<PaymentData>();

        //TODO not sure about roles. Also it should be optimized and commonized
        if (roleNames.Contains(RoleNames.InternalDesigner) || roleNames.Contains(RoleNames.ExternalDesigner))
        {
            paymentDataInfos = await GetPaymentDataForUser(ProjectToPayerPaymentData(), FilterByReceiverId(currentUser.Id));
        }
        else if ((roleNames.Contains(RoleNames.FreeEndUser) || roleNames.Contains(RoleNames.PremiumEndUser)))
        {
            paymentDataInfos = await GetPaymentDataForUser(ProjectToReceiverPaymentData(), FilterByPayerId(currentUser.Id));
        }

        IEnumerable<int> paymentParticipantsIds = paymentDataInfos.Select(pi => pi.ParticipantId);
        IEnumerable<ChatPersonOutDTO> result = await _userRepository.Get(ProjectToChatPerson(currentUser),
                                         user => paymentParticipantsIds.Contains(user.Id));

        SetIsChatExpired(result, paymentDataInfos);
        SetLastMessage(result);

        return result;
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

    private async Task<IEnumerable<PaymentData>> GetPaymentDataForUser(Expression<Func<ConsultationPayment, PaymentData>> projection, Expression<Func<ConsultationPayment, bool>> filter)
    {
        IEnumerable<PaymentData> consultationPayments = await _consultationPaymentRepository.Get(projection, filter);

        return consultationPayments.GroupBy(group => group.ParticipantId).Select(group => new PaymentData
        {
            ParticipantId = group.Key,
            ExpirationDate = group.OrderByDescending(payment => payment.ExpirationDate)
                                 .Select(payment => payment.ExpirationDate)
                                 .FirstOrDefault()
        }
        );
    }

    private Expression<Func<ConsultationPayment, PaymentData>> ProjectToPayerPaymentData()
    {
        return payment => new PaymentData { ParticipantId = payment.PayerId, ExpirationDate = payment.ExpirationDate };
    }

    private Expression<Func<ConsultationPayment, PaymentData>> ProjectToReceiverPaymentData()
    {
        return payment => new PaymentData { ParticipantId = payment.ReceiverId, ExpirationDate = payment.ExpirationDate };
    }

    private Expression<Func<ConsultationPayment, bool>> FilterByPayerId(int idToFind)
    {
        return payment => payment.PayerId == idToFind;
    }

    private Expression<Func<ConsultationPayment, bool>> FilterByReceiverId(int idToFind)
    {
        return payment => payment.ReceiverId == idToFind;
    }

    private void SetIsChatExpired(IEnumerable<ChatPersonOutDTO> chatPersonOutDTOs, IEnumerable<PaymentData> paymentDataInfos)
    {
        foreach (var chatPersonOut in chatPersonOutDTOs)
        {
            PaymentData paymentForCurrentPerson = paymentDataInfos.SingleOrDefault(pd => chatPersonOut.Id == pd.ParticipantId);
            chatPersonOut.ChatPeriodExpired = paymentForCurrentPerson != default ? paymentForCurrentPerson.ExpirationDate < DateTime.UtcNow : true;
        }
    }

    private void SetLastMessage(IEnumerable<ChatPersonOutDTO> chatPersonOutDTOs)
    {
        foreach (var chatPersonOut in chatPersonOutDTOs)
        {
            DateTime lastSentDate = chatPersonOut.LastSentMessageDate;
            DateTime lastRecievedDate = chatPersonOut.LastReceivedMessageDate;

            if (lastSentDate > lastRecievedDate)
            {
                chatPersonOut.LastMessageDate = lastSentDate;
                chatPersonOut.LastMessageContent = chatPersonOut.LastSentMessageContent;
            }
            else
            {
                chatPersonOut.LastMessageDate = lastRecievedDate;
                chatPersonOut.LastMessageContent = chatPersonOut.LastReceivedMessageContent;
            }
        }
    }

    private static Expression<Func<User, ChatPersonOutDTO>> ProjectToChatPerson(User currentUser)
    {
        return user => new ChatPersonOutDTO()
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            PhotoPath = user.PhotoPath,
            LastSentMessageDate = user.MessagesSent.Where(message => message.RecipientId == currentUser.Id && message.Content != null)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault(),
            LastSentMessageContent = user.MessagesSent.Where(message => message.RecipientId == currentUser.Id && message.Content != null)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault(),
            LastReceivedMessageDate = user.MessagesReceived.Where(message => message.SenderId == currentUser.Id && message.Content != null)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.MessageSentDate)
                                                                  .FirstOrDefault(),
            LastReceivedMessageContent = user.MessagesReceived.Where(message => message.SenderId == currentUser.Id && message.Content != null)
                                                                  .OrderByDescending(message => message.MessageSentDate)
                                                                  .Select(message => message.Content)
                                                                  .FirstOrDefault()
        };
    }

    private PusherMessage CreatePusherMessage(ChatMessage chatMessage)
    {
        return new PusherMessage()
        {
            Content = chatMessage.Content,
            RecipientId = chatMessage.RecipientId,
            SenderId = chatMessage.SenderId,
            MessageSentDate = chatMessage.MessageSentDate,
            MessageAttachments = chatMessage.Attachments.Select(a => new PusherMessageAttachment() { FileFormat = a.FileFormat, PublicId = a.PublicId, Url = a.Url})
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

    private async Task<ICollection<ChatMessageAttachment>> UploadMessageAttachments(IEnumerable<IFormFile> attachments)
    {
        ICollection<ChatMessageAttachment> chatMessageAttachments = new List<ChatMessageAttachment>();

        if (attachments is null || attachments.Count() == 0)
        {
            return chatMessageAttachments;
        }

        foreach (IFormFile fileAttachment in attachments)
        {
            try
            {
                ImageUploadResult uploadResult = await _fileUploadService.UploadFileAsync(fileAttachment, ChatMessageNames.AttachmentsFolderName);

                if (uploadResult.Error is not null)
                {
                    throw new Exception($"Problem uploading file {fileAttachment.FileName}.");
                }

                ChatMessageAttachment chatMessageAttachment = new ChatMessageAttachment()
                {
                    Url = uploadResult.SecureUrl.AbsoluteUri,
                    PublicId = uploadResult.PublicId,
                    FileFormat = fileAttachment.ContentType
                };

                chatMessageAttachments.Add(chatMessageAttachment);
            }
            catch (Exception)
            {
                //TODO: log error
                //TODO: delete all already uploaded before error happened
                throw;
            }
        }

        return chatMessageAttachments;
    }

    #endregion Private methods
}