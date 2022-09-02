﻿using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class StyleImagesController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly IImageService _imageService;

		#endregion Fields

		#region Constructors

		public StyleImagesController(IUnitOfWork unitOfWork, IImageService imageService, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
			_imageService = imageService;
		}

		#endregion Constructors

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
				string dbPath = await _imageService.AddImageAsync(file, "StyleImages");
				StyleImage styleImage = _mapper.Map<StyleImage>(styleImageInDTO);

				styleImage.Style = style;
				styleImage.Path = dbPath;
				_unitOfWork.StyleImageRepository.Insert(styleImage);

				if (await _unitOfWork.SaveChanges())
				{
					style.StyleImages.Add(styleImage);
					return _mapper.Map<StyleImageOutDTO>(styleImage);
				}
			}

			return BadRequest("Problem adding style image");
		}

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
				string imagePath = styleImage.Path;
				await _imageService.DeleteImageFromFileSystemAsync(imagePath);

				await _unitOfWork.StyleImageRepository.Delete(imageId);
				style.StyleImages.Remove(styleImage);

				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Internal server error: {ex}");
			}

			return Ok();
		}
	}
}
