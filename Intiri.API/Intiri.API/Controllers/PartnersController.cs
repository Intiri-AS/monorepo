﻿using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Intiri.API.Services;
using Intiri.API.Extension;
using Intiri.API.Models.Product;
using Intiri.API.Models.DTO.OutputDTO.Partner;
using Intiri.API.Models.Room;
using System.Net;

namespace Intiri.API.Controllers
{
	public class PartnerController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IAccountService _accountService;
		private readonly ILogger<UsersController> _logger;
		private readonly IFileUploudService _fileUploadService;

		#endregion Fields

		#region Constructors

		public PartnerController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploudService fileUploadService, ILogger<UsersController> logger) 
			: base(unitOfWork)
		{
			_mapper = mapper;
			_logger = logger;
			_fileUploadService = fileUploadService;
			_accountService = accountService;
		}

		#endregion Constructors



		[HttpGet]
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

		[HttpGet("profile")]
		public async Task<ActionResult<PartnerContactOutDTO>> GetPartnerProfile()
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			return Ok(_mapper.Map<PartnerOutDTO>(partner));
		}

		[HttpGet("allPartnersContacts")]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllPartnerContacts()
		{
			IEnumerable<PartnerContact> pUsers = await _unitOfWork.UserRepository.GetUsersAsync<PartnerContact>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(pUsers);

			return Ok(usersToReturn);
		}

		[HttpPost("createPartner")]
		public async Task<ActionResult<PartnerOutDTO>> CreatePartner([FromForm] PartnerInDTO partnerInDTO)
		{
			if (await _unitOfWork.PartnerRepository.DoesAnyExist(p => p.Name == partnerInDTO.Name))
			{
				return BadRequest($"Partner name: '{partnerInDTO.Name}' already exists.");
			}

			Partner partner = _mapper.Map<Partner>(partnerInDTO);

			IFormFile logoFile = partnerInDTO.LogoFile;
			if (logoFile != null && logoFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = await _fileUploadService.TryAddFileToCloudinaryAsync(logoFile, FileUploadDestinations.PartnerLogos);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				partner.LogoPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				partner.LogoPublicId = uploadResult.Item3.PublicId;
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

			try
			{
				await _unitOfWork.PartnerRepository.Delete(partner.Id);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			if (!string.IsNullOrEmpty(partner.LogoPublicId))
			{
				Tuple<HttpStatusCode, string> tuple = await _fileUploadService.TryDeleteFileFromCloudinaryAsync(partner.LogoPublicId);

				if (tuple.Item1 != HttpStatusCode.OK)
					return Problem(title: "Partner is deleted. Faild delete partner logo.", statusCode: (int?)tuple.Item1, detail: tuple.Item2);
			}

			return Ok();
		}

		[HttpPut("update")]
		public async Task<ActionResult<PartnerOutDTO>> UpdatePartnerProfile(PartnerInDTO partnerInDTO)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IFormFile logoFile = partnerInDTO.LogoFile;

			if (logoFile != null && logoFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = await _fileUploadService.TryAddFileToCloudinaryAsync(logoFile, FileUploadDestinations.PartnerLogos, partner.LogoPublicId);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				partner.LogoPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				partner.LogoPublicId = uploadResult.Item3.PublicId;
			}

			_mapper.Map(partnerInDTO, partner);
			_unitOfWork.PartnerRepository.Update(partner);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<PartnerOutDTO>(partner);
			}

			return BadRequest("Failed to update partner.");
		}

		[HttpPost("addLogo")]
		public async Task<ActionResult<PartnerLogoPathOutDTO>> AddLogo([FromForm] UserPhotoFileInDTO inFile)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IFormFile logoFile = inFile.PhotoPath;

			if (logoFile != null && logoFile.Length > 0)
			{
				Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult = await _fileUploadService.TryAddFileToCloudinaryAsync(logoFile, FileUploadDestinations.PartnerLogos, partner.LogoPublicId);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}

				partner.LogoPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
				partner.LogoPublicId = uploadResult.Item3.PublicId;

				_unitOfWork.PartnerRepository.Update(partner);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(new PartnerLogoPathOutDTO() { LogoPath = partner.LogoPath });
				}
			}

			return BadRequest("Problem adding partner logo.");
		}
	}
}
