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

namespace Intiri.API.Controllers
{
	public class InspirationsController : BaseApiController
	{
		#region Fields

		private readonly IFileUploadService _fileUploadService;
		private readonly ILogger<InspirationsController> _logger;
		private readonly IAccountService _accountService;

		#endregion Fields

		#region Constructors

		public InspirationsController(IUnitOfWork unitOfWork, IFileUploadService fileUploadService, IAccountService accountService, ILogger<InspirationsController> logger) : base(unitOfWork)
		{
			_fileUploadService = fileUploadService;
			_accountService = accountService;
			_logger = logger;
		}

		#endregion Constructors

		[HttpPost("addInspiration")]
		public async Task<ActionResult<UserPhotoPathOutDTO>> AddPhoto([FromForm] UserPhotoFileInDTO inFile)
		{
			EndUser clientUser = await _accountService.GetUserByUsernameAsync<EndUser>(User.GetUsername());

			if (clientUser == null)
			{
				return Unauthorized("Invalid clent.");
			}

			IFormFile file = inFile.PhotoPath;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.ClientInspirations);
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
					return Ok(new UserPhotoPathOutDTO() { PhotoPath = inspiration.Url });
				}
			}

			return BadRequest("Problem adding user photo.");
		}

		[HttpDelete("deleteInspiration/{inspirationId}")]
		public async Task<IActionResult> DeleteInspiration(int inspirationId)
		{
			EndUser clientUser = await _accountService.GetUserByUsernameAsync<EndUser>(User.GetUsername());

			Inspiration inspiration = clientUser.Inspirations.FirstOrDefault(x => x.Id == inspirationId);

			if (inspiration == null) return NotFound();

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
