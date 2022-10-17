using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class AdminController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IFileUploadService _fileUploadService;
		
		#endregion Fields

		#region Constructors

		public AdminController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploadService fileUploadService) : base(unitOfWork)
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
	}
}
