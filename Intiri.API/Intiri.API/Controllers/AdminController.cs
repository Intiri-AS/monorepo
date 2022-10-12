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

		public async Task<ActionResult<RegisterOutDTO>> AddPartnerContact(RegisterInDTO registerIn)
		{
			string phoneNumberFull = registerIn.CountryCode + registerIn.PhoneNumber;

			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumberFull))
			{
				return BadRequest("Phone number is taken");
			}

			PartnerContact pUser = _mapper.Map<PartnerContact>(registerIn);

			IdentityResult result = await _accountService.CreateUserAsync(pUser);
			if (!result.Succeeded)
			{
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await _accountService.AddUserToRolesAsync(pUser, registerIn.Role);
			if (!roleResult.Succeeded)
			{
				return BadRequest(roleResult.Errors);
			}

			return Ok(_mapper.Map<RegisterOutDTO>(pUser));
		}

		public async Task<ActionResult<RegisterOutDTO>> AddDesigner(RegisterInDTO registerIn)
		{
			string phoneNumberFull = registerIn.CountryCode + registerIn.PhoneNumber;

			if (await _accountService.IsUserWithPhoneNumberExists(phoneNumberFull))
			{
				return BadRequest("Phone number is taken");
			}

			Designer pUser = _mapper.Map<Designer>(registerIn);

			IdentityResult result = await _accountService.CreateUserAsync(pUser);
			if (!result.Succeeded)
			{
				return BadRequest(result.Errors);
			}

			IdentityResult roleResult = await _accountService.AddUserToRolesAsync(pUser, registerIn.Role);
			if (!roleResult.Succeeded)
			{
				return BadRequest(roleResult.Errors);
			}

			return Ok(_mapper.Map<RegisterOutDTO>(pUser));
		}

	}
}
