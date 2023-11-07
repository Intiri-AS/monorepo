using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace Intiri.API.Services
{
    public class AuthMessageSenderService : ISmsSender
    {
        private readonly ILogger<AuthMessageSenderService> _logger;

        public AuthMessageSenderService(
            IOptions<TwilioConfiguration> options,
            ILogger<AuthMessageSenderService> logger
        )
        {
            Options = options.Value;
            _logger = logger;
        }

        public TwilioConfiguration Options { get; private set; }

        // Function that based on country code will return the sender string
        // In the case of a sms being sent to Norway (country code 47) the
        // sender id from Options.SMSAccountFromSenderId should be used
        private string GetSender(string countryCode)
        {
            switch (countryCode)
            {
                case "47": // Norway
                case "46": // Sweden
                case "45": // Denmark
                case "44": // United Kingdom
                case "49": // Germany
                case "33": // France
                case "34": // Spain
                case "39": // Italy
                    return Options.SMSAccountFromSenderId;
                default:
                    return Options.SMSAccountFromNumber;
            }
        }

        // Function that will send an SMS message to the number provided
        // with the message provided, using the Twilio API
        public async Task<MessageResource> SendSmsAsync(
            string countryCode,
            string number,
            string message
        )
        {
            MessageResource messageResource = null;

            string accountSid = Options.SMSAccountIdentification;
            string authToken = Options.SMSAccountPassword;

            TwilioClient.Init(accountSid, authToken);

            try
            {
                messageResource = await MessageResource.CreateAsync(
                    to: new Twilio.Types.PhoneNumber($"+{countryCode}{number}"),
                    from: new Twilio.Types.PhoneNumber(GetSender(countryCode)),
                    body: message
                );
            }
            catch (Exception e)
            {
                _logger.LogInformation("ola");
            }
            return messageResource;
        }
    }
}
