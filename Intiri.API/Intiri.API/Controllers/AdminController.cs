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

		public AdminController(IUnitOfWork unitOfWork, IMapper mapper, IFileUploadService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpPost("createPartner")]
		public async Task<ActionResult<PartnerOutDTO>> CreatePartner([FromBody] PartnerInDTO partnerInDTO)
		{
			Partner partner = _mapper.Map<Partner>(partnerInDTO);

			IFormFile file = partnerInDTO.LogoFile;

			if (file.Length > 0)
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
	}
}
