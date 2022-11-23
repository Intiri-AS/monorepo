﻿using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class StyleImagesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ICloudinaryService _fileUploadService;

		#endregion Fields

		#region Constructors

		public StyleImagesController(
			IUnitOfWork unitOfWork, 
			IMapper mapper, 
			ICloudinaryService fileUploadService) : base(unitOfWork)
		{
			_mapper = mapper;
			_fileUploadService = fileUploadService;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<StyleImageOutDTO>>> GetStyleImages()
		{
			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesAsync();
			IEnumerable<StyleImageOutDTO> styleImagesToReturn = _mapper.Map<IEnumerable<StyleImageOutDTO>>(styleImages);

			return Ok(styleImagesToReturn);
		}

		[HttpGet("id/{imageId}")]
		public async Task<ActionResult<StyleImageOutDTO>> GetStyleImageById(int imageId)
		{
			StyleImage styleImage = await _unitOfWork.StyleImageRepository.GetStyleImageByIdAsync(imageId);

			if (styleImage == null)
			{
				return BadRequest("Style image doesn't exist");
			}

			return _mapper.Map<StyleImageOutDTO>(styleImage);
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult<StyleImageOutDTO>> AddStyleImage([FromForm] StyleImageInDTO styleImageInDTO)
		{
			Style style = await _unitOfWork.StyleRepository.GetByID(styleImageInDTO.StyleId);
			
			if (style == null)
			{
				return BadRequest("Target style doesn't exist");
			}

			IFormFile file = styleImageInDTO.ImageFile;

			if (file.Length > 0)
			{
				ImageUploadResult uploadResult = null;
				try
				{
					uploadResult = await _fileUploadService.UploadFileAsync(file, FileUploadDestinations.StyleImages);
				}
				catch (Exception)
				{
					return BadRequest("Failed to upload style image.");
				}

				if (uploadResult.Error != null)
				{
					return BadRequest("Failed to upload style image.");
				}

				StyleImage styleImage = _mapper.Map<StyleImage>(styleImageInDTO);

				styleImage.ImagePath = uploadResult.SecureUrl.AbsoluteUri;
				styleImage.PublicId = uploadResult.PublicId;

				_unitOfWork.StyleImageRepository.Insert(styleImage);

				if (await _unitOfWork.SaveChanges())
				{
					return Ok(_mapper.Map<StyleImageOutDTO>(styleImage));
				}
			}
			return BadRequest("Problem adding style image");
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpDelete("delete/{imageId}")]
		public async Task<IActionResult> DeleteStyleImage(int imageId)
		{
			StyleImage styleImage = await _unitOfWork.StyleImageRepository.GetByID(imageId);
			Style style = await _unitOfWork.StyleRepository.GetByID(styleImage.StyleId);

			if (styleImage == null)
			{
				return BadRequest("Style image is not found.");
			}

			try
			{
				DeletionResult deletionResult = await _fileUploadService
					.DeleteFileAsync(styleImage.PublicId);

				if (deletionResult.Error != null)
				{
					return BadRequest("Failed to delete style image.");
				}

				await _unitOfWork.StyleImageRepository.Delete(imageId);
				style.StyleImages.Remove(styleImage);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}
	}
}
