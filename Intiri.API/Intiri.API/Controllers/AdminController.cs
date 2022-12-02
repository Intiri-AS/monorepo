using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
	[Authorize(Policy = PolicyNames.AdminPolicy)]
	public class AdminController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ICloudinaryService _fileUploadService;
		
		#endregion Fields

		#region Constructors

		public AdminController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, ICloudinaryService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpGet("totalCount")]
		public async Task<ActionResult<DashboardTotalOutDTO>> GetDashboardTotalCount()
		{
			DashboardTotalOutDTO dashboardTotalDTO = new DashboardTotalOutDTO();

			dashboardTotalDTO.TotalClients = await _unitOfWork.UserRepository.GetUsersCountAsync<EndUser>();
			dashboardTotalDTO.TotalDesigners = await _unitOfWork.UserRepository.GetUsersCountAsync<Designer>();
			dashboardTotalDTO.TotalPartners = await _unitOfWork.PartnerRepository.GetPartnersCountAsync();
			dashboardTotalDTO.TotalMoodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsCountAsync();

			return Ok(dashboardTotalDTO);
		}

		[HttpGet("inspirations")]
		public async Task<ActionResult<IEnumerable<InspirationOutDTO>>> GetAllInspirations()
		{
			IEnumerable<Inspiration> inspirations = await _unitOfWork.InspirationRepository.Get();

			return Ok(_mapper.Map<IEnumerable<InspirationOutDTO>>(inspirations));
		}

		[HttpGet("clientsNumber")]
		public async Task<ActionResult<IEnumerable<ClientsPerMonthDTO>>> GetClientNumberPerMonth()
		{
			IEnumerable<ClientsPerMonthDTO> clientsPerMonth =  await _unitOfWork.UserRepository.GetClientsPerMonthAsync();

			return Ok(clientsPerMonth);
		}

		[HttpGet("salesOverview")]
		public async Task<ActionResult<IEnumerable<PaymentsPerMonthDTO>>> GetTotalIncomePerMonth()
		{
			IEnumerable<PaymentsPerMonthDTO> paymentsPerMonth = await _unitOfWork.ConsultationPaymentRepository.GetAllPaymentPerMonthAsync();

			return Ok(paymentsPerMonth);
		}

		[HttpGet("styleTrends")]
		public async Task<ActionResult<IEnumerable<StyleTrendDTO>>> GetMoodboardStylesStatistic()
		{
			IEnumerable<Style> styles = await _unitOfWork.StyleRepository.Get();

			#region all moodboards
			//Dictionary<int, int> styleTrends = await _unitOfWork.MoodboardRepository.GetMoodboardStylesCountAsync();

			#endregion

			#region cliens moodboards

			Dictionary<int, int> styleTrends = await _unitOfWork.MoodboardRepository.GetClientMoodboardStylesCountAsync();

			#endregion

			List<StyleTrendDTO> styleTrendDTOs = new List<StyleTrendDTO>();
			foreach (var style in styles)
			{
				styleTrendDTOs.Add(new StyleTrendDTO
				{
					StyleName = style.Name,
					StyleTrend = styleTrends.ContainsKey(style.Id) ? styleTrends[style.Id] : 0
				});
			}
			return Ok(styleTrendDTOs);
		}
	}
}
