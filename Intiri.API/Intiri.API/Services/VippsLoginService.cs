using IdentityModel.Client;
using Intiri.API.Configuration;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using NLog;

namespace Intiri.API.Services
{
	public class VippsLoginService: IVippsLoginService
	{
		private readonly IOptions<VippsLoginConfiguration> _options;
		private readonly ILogger<VippsLoginService> _logger;
		private readonly HttpClient _httpClient;
		private DiscoveryDocumentResponse _discoveryDocument;

		public VippsLoginService(
			ILogger<VippsLoginService> logger,
			IOptions<VippsLoginConfiguration> options)
		{
			_logger = logger;
			_options = options;
			_httpClient = new HttpClient();
		}

		public async Task GetDiscoveryDocument()
		{
			DiscoveryDocumentRequest discoRequest = new DiscoveryDocumentRequest
			{
				Address = _options.Value.DiscoveryUrl,
				Policy =
				{
					ValidateEndpoints = false
				}
			};

			DiscoveryDocumentResponse discoResponse =
				await _httpClient.GetDiscoveryDocumentAsync(discoRequest);

			if (discoResponse.IsError)
			{
				_logger.LogError($"{discoResponse.Error}");
				return;
			}

			_discoveryDocument = discoResponse;

		}

		public async Task<string> GetRedirectUrl()
		{
			RequestUrl requestUrl = new RequestUrl(_discoveryDocument.AuthorizeEndpoint);

			string authorizationUrl = requestUrl.CreateAuthorizeUrl(
				clientId: _options.Value.ClientId,
				responseType: "code",
				redirectUri: "http://localhost:8100/my-intiri",
				scope: "name email phoneNumber",
				state: "TODO: Session cookie");

			//var ola = await _httpClient.GetAsync(authorizationUrl);

			return authorizationUrl;
		}
	}
}
