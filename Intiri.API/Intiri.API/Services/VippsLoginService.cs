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
		private readonly string _discoveryUrl;
		private readonly Logger _logger;

		public VippsLoginService(Logger logger, IOptions<VippsConfiguration> options)
		{
			_logger = logger;
			_discoveryUrl = options.Value.DiscoveryUrl;
		}

		private async Task<DiscoveryDocumentResponse> Get()
		{
			HttpClient client = new HttpClient();

			DiscoveryDocumentRequest discoRequest = new DiscoveryDocumentRequest
			{
				Address = _discoveryUrl
			};

			DiscoveryDocumentResponse discoResponse =
				await client.GetDiscoveryDocumentAsync();

			if (discoResponse.IsError)
			{
				_logger.Error($"{discoResponse.Error}");
			}

			//var ru = new RequestUrl(discovery.AuthorizeEndpoint);

			//var ulr = ru.CreateAuthorizeUrl(
			//	clientId: )
			//return true;

		}
	}
}
