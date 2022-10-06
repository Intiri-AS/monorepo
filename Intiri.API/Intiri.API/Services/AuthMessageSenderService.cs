using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace Intiri.API.Services
{
	public class AuthMessageSenderService: ISmsSender
	{
		public AuthMessageSenderService(IOptions<TwilioConfiguration> options)
		{
			Options = options.Value;
		}

		public TwilioConfiguration Options { get; private set; }

		public async Task<MessageResource> SendSmsAsync(string number, string message)
		{
			string accountSid = Options.SMSAccountIdentification;
			string authToken = Options.SMSAccountPassword;

			TwilioClient.Init(accountSid, authToken);

			return await MessageResource.CreateAsync(
				to: new Twilio.Types.PhoneNumber(number),
				from: new Twilio.Types.PhoneNumber(Options.SMSAccountFrom),
				body: message);
		}

	}
}
