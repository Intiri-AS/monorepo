using Twilio.Rest.Api.V2010.Account;

namespace Intiri.API.Services.Interfaces
{
    public interface ISmsSender
    {
        Task<MessageResource> SendSmsAsync(string number, string message);
    }
}
