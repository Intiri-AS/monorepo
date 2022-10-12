using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.Material;
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
		private readonly IAccountService _accountService;

		#endregion Fields

		#region Constructors

		public AdminController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploadService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
			_accountService = accountService;
		}

		#endregion Constructors

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
					uploadResult = await _fileUploadService
						.UploadFileAsync(file, FileUploadDestinations.PartnerLogos);
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

			try
			{
				deletionResult = await _fileUploadService
					.DeleteFileAsync(partner.LogoPublicId);
			}
			catch (Exception)
			{
				return BadRequest("Failed to delete partner logo.");
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
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllDesigner()
		{
			IEnumerable<Designer> users = await _unitOfWork.UserRepository.GetUsersAsync<Designer>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

			return Ok(usersToReturn);
		}

		[HttpGet("partnerContacts")]
		public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllPartnerContacts()
		{
			IEnumerable<PartnerContact> users = await _unitOfWork.UserRepository.GetUsersAsync<PartnerContact>();
			IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

			return Ok(usersToReturn);
		}

	}
}
