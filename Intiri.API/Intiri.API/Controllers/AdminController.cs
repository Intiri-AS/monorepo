﻿using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Dashboard;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.DTO.OutputDTO.Partner;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Services;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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

		[HttpPost("createPartner")]
		public async Task<ActionResult<PartnerOutDTO>> CreatePartner([FromForm] PartnerInDTO partnerInDTO)
		{
			Partner partner = _mapper.Map<Partner>(partnerInDTO);

			IFormFile file = partnerInDTO.LogoFile;

			if (file != null && file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.PartnerLogos);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload partner logo.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest("Failed to upload material image.");
				}

				partner.LogoPath = uploadResult.SecureUri.AbsoluteUri;
				partner.LogoPublicId = uploadResult.PublicId;
			}

			_unitOfWork.PartnerRepository.Insert(partner);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<PartnerOutDTO>(partner);
			}

			return BadRequest("Problem occured while adding partner");
		}

		[HttpDelete("delete/{partnerId}")]
		public async Task<ActionResult<PartnerOutDTO>> DeletePartner(int partnerId)
		{
			Partner partner = await _unitOfWork.PartnerRepository.GetByID(partnerId);

			if (partner == null)
			{
				return BadRequest("Partner doesn' exist.");
			}

			DeletionResult deletionResult = null;
			if (partner.LogoPath != null)
			{
				try
				{
					deletionResult = await _fileUploadService.DeleteFileAsync(partner.LogoPublicId);
				}
				catch (Exception)
				{
					return BadRequest("Failed to delete partner logo.");
				}
			}

			try
			{
				await _unitOfWork.PartnerRepository.Delete(partner.Id);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}


		[HttpGet("endUsers")]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllEndUsers()
		{
			IEnumerable<EndUser> users = await _unitOfWork.UserRepository.GetUsersAsync<EndUser>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

			return Ok(usersToReturn);
		}

		[HttpGet("designers")]
		public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesigner()
		{
			IEnumerable<Designer> dUsers = await _unitOfWork.UserRepository.GetDesignerUsersAsync();

			foreach (Designer designer in dUsers)
			{
				IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsByIdsList(designer.CreatedMoodboards.Select(m => m.Id).ToArray());
				designer.CreatedMoodboards = moodboards.ToArray();
			}

			IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(dUsers);

			return Ok(usersToReturn);
		}

		[HttpGet("partners")]
		public async Task<ActionResult<IEnumerable<PartnerOutDTO>>> GetAllPartners()
		{
			IEnumerable<Partner> partners = await _unitOfWork.PartnerRepository.GetPartnersAsync();
			IEnumerable<PartnerOutDTO> usersToReturn = _mapper.Map<IEnumerable<PartnerOutDTO>>(partners);

			return Ok(usersToReturn);
		}

		[HttpGet("partner/{partnerId}")]
		public async Task<ActionResult<IEnumerable<PartnerContactOutDTO>>> GetPartnerWithContactsAndProducts(int partnerId)
		{
			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerAllAsync(partnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			PartnerAllOutDTO partnerOut = _mapper.Map<PartnerAllOutDTO>(partner);

			return Ok(partnerOut);
		}

		[HttpGet("allPartnerContacts")]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllPartnerContacts()
		{
			IEnumerable<PartnerContact> pUsers = await _unitOfWork.UserRepository.GetUsersAsync<PartnerContact>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(pUsers);

			return Ok(usersToReturn);
		}
	}
}
