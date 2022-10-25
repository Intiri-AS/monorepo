using CloudinaryDotNet.Actions;
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

namespace Intiri.API.Controllers
{
	public class PartnerController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IAccountService _accountService;
		private readonly ILogger<UsersController> _logger;
		private readonly IFileUploadService _fileUploadService;

		#endregion Fields

		#region Constructors

		public PartnerController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploadService fileUploadService, ILogger<UsersController> logger) 
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

		[HttpPut("update")]
		public async Task<ActionResult<PartnerOutDTO>> UpdatePartnerProfile(PartnerInDTO partnerInDTO)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			_mapper.Map(partnerInDTO, partner);
			_unitOfWork.PartnerRepository.Update(partner);

			if (await _unitOfWork.SaveChanges())
			{
				return _mapper.Map<PartnerOutDTO>(partner);
			}

			return BadRequest("Failed to update user.");
		}

		[HttpPost("addPhoto")]
		public async Task<ActionResult<PartnerLogoPathOutDTO>> AddPhoto([FromForm] UserPhotoFileInDTO inFile)
		{
			PartnerContact pUser = await _accountService.GetUserByUsernameAsync<PartnerContact>(User.GetUsername());
			if (pUser == null) return Unauthorized("Invalid partner contact user.");

			Partner partner = await _unitOfWork.PartnerRepository.GetPartnerWithProductsAsync(pUser.PartnerId);
			if (partner == null) return BadRequest("Invalid partner.");

			IFormFile file = inFile.PhotoPath;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.PartnerLogos);
				}
				catch (Exception ex)
				{
					return BadRequest($"Failed to upload partner logo: {ex.Message}");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest($"Failed to upload partner logo: {uploadResult.Error.Message}");
				}

				if (partner.LogoPath != null)
				{
					DeletionResult deletionResult = null;
					try
					{
						deletionResult = await _fileUploadService.DeleteFileAsync(partner.LogoPublicId);
					}
					catch (Exception)
					{
						return BadRequest("Failed to delete partner logo.");
					}

					if (deletionResult.Error != null)
					{
						_logger.LogWarning("Faild delete all photo from cloudinary services");
					}
				}

				partner.LogoPath = uploadResult.SecureUrl.AbsoluteUri;
				partner.LogoPublicId = uploadResult.PublicId;

				_unitOfWork.PartnerRepository.Update(partner);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(new PartnerLogoPathOutDTO() { LogoPath = partner.LogoPath });
				}
			}

			return BadRequest("Problem adding user photo.");
		}
	}
}
