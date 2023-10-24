using Twilio.Rest.Api.V2010.Account;

namespace Intiri.API.Services.Interfaces
{
    public interface ISmsSender
    {
        Task<MessageResource> SendSmsAsync(string countryCode, string number, string message);
    }
}
