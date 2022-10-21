using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Intiri.API.Models.DTO.OutputDTO.Material;
using Intiri.API.Models.Moodboard;
using AutoMapper;

namespace Intiri.API.Controllers
{
	public class InspirationsController : BaseApiController
	{
		#region Fields

		private readonly IFileUploadService _fileUploadService;
		private readonly ILogger<InspirationsController> _logger;
		private readonly IAccountService _accountService;
		private readonly IMapper _mapper;


		#endregion Fields

		#region Constructors

		public InspirationsController(IUnitOfWork unitOfWork, IFileUploadService fileUploadService, IAccountService accountService, ILogger<InspirationsController> logger, IMapper mapper) : base(unitOfWork)
		{
			_fileUploadService = fileUploadService;
			_accountService = accountService;
			_logger = logger;
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<InspirationOutDTO>>> GetInspiration()
		{
			EndUser clientUser = await _unitOfWork.UserRepository.GetEndUserByIdWithInspirationsAsync(User.GetUserId());
			if (clientUser == null) return Unauthorized("Invalid clent.");

			IEnumerable<InspirationOutDTO> inspirationsOut = _mapper.Map<IEnumerable<InspirationOutDTO>>(clientUser.Inspirations);

			return Ok(inspirationsOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<InspirationOutDTO>> AddPhoto(IFormFile inFile)
		{
			EndUser clientUser = await _accountService.GetUserByUsernameAsync<EndUser>(User.GetUsername());
			if (clientUser == null) return Unauthorized("Invalid clent.");

			if (inFile.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(inFile, FileUploadDestinations.ClientInspirations);
				}
				catch (Exception ex)
				{
					return BadRequest($"Failed to upload user photo: {ex.Message}");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest($"Failed to upload user photo: {uploadResult.Error.Message}");
				}

				Inspiration inspiration = new Inspiration()
				{
					Url = uploadResult.SecureUrl.AbsoluteUri,
					PublicId = uploadResult.PublicId
				};

				clientUser.Inspirations.Add(inspiration);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(_mapper.Map<InspirationOutDTO>(inspiration));
				}
			}

			return BadRequest("Problem adding user inspiration.");
		}

		[HttpDelete("delete/{inspirationId}")]
		public async Task<IActionResult> DeleteInspiration(int inspirationId)
		{
			EndUser clientUser = await _unitOfWork.UserRepository.GetEndUserByIdWithInspirationsAsync(User.GetUserId());
			if (clientUser == null) return Unauthorized("Invalid clent.");

			Inspiration inspiration = clientUser.Inspirations.FirstOrDefault(x => x.Id == inspirationId);
			if (inspiration == null) return NotFound("Inspiration file not found.");

			if (inspiration.PublicId != null)
			{
				var result = await _fileUploadService.DeleteFileAsync(inspiration.PublicId);
				if (result.Error != null) return BadRequest(result.Error.Message);
			}
			 
			clientUser.Inspirations.Remove(inspiration);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok();
			}

			return BadRequest("Failed to delete the inspiration");
		}
	}
}
