using Messenger.Messages;
using PusherServer;
using System.Text;

namespace Messenger.MessageHandlers;

public class PusherMessageHandler : IMessageHandler
{
    public Type MessageType => typeof(PusherMessage);

    public async Task<bool> SendMesssage(Message message)
    {
        ArgumentNullException.ThrowIfNull(message, nameof(message));

        if (message is not PusherMessage)
        {
            throw new ArgumentException($"Message expected to be of type {typeof(PusherMessage)}, but it is {message.GetType()}");
        }

        var options = new PusherOptions
        {
            Cluster = "eu",
            Encrypted = true
        };

        var pusher = new Pusher(
          "1488805",
          "0233be6c2ef5fb26cc7d", // //TODO-SECURITY: Move this to configuration
          "bab67a1d5e732b7ccfec",
          options);

        PusherMessage pusherMessage = message as PusherMessage;
        string channelName = CreateChannelName(pusherMessage.RecipientId, pusherMessage.SenderId);
        string eventName = CreateMessageEvent();

        await pusher.TriggerAsync(
          channelName,
          eventName,
          pusherMessage);

        return true;
    }

    #region Private methods

    private string CreateChannelName(int recipientId, int senderId)
    {
        bool recipientSmaller = recipientId < senderId;

        StringBuilder sb = new StringBuilder();

        sb.Append("chat_");

        if (recipientSmaller)
        {
            sb.Append(recipientId.ToString() + "_");
            sb.Append(senderId);
        }
        else
        {
            sb.Append(senderId.ToString() + "_");
            sb.Append(recipientId);
        }

        return sb.ToString();
    }

    private string CreateMessageEvent()
    {
        return "message";
    }

    #endregion Private methods
}
