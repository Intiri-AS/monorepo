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
		private readonly ILogger<AuthMessageSenderService> _logger;

		public AuthMessageSenderService(
			IOptions<TwilioConfiguration> options,
			ILogger<AuthMessageSenderService> logger)
		{
			Options = options.Value;
			_logger = logger;
		}

		public TwilioConfiguration Options { get; private set; }

		public async Task<MessageResource> SendSmsAsync(string number, string message)
		{
			MessageResource messageResource = null;

			string accountSid = Options.SMSAccountIdentification;
			string authToken = Options.SMSAccountPassword;

			TwilioClient.Init(accountSid, authToken);

			try
			{
				messageResource = await MessageResource.CreateAsync(
					to: new Twilio.Types.PhoneNumber(number),
					from: new Twilio.Types.PhoneNumber(Options.SMSAccountFrom),
					body: message);
			}
			catch (Exception e)
			{
				_logger.LogInformation("ola");
			}
			return messageResource;
		}

	}
}
