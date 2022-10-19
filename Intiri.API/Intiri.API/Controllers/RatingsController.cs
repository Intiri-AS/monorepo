using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.Rating;
using Intiri.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Intiri.API.Extension;
using Intiri.API.Services.Interfaces;
using Intiri.API.Models.DTO.OutputDTO.DesignerRating;
using AutoMapper;

namespace Intiri.API.Controllers
{
	public class RatingsController : BaseApiController
	{
		#region Fields

		private readonly IRatingService _ratingService;
		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public RatingsController(IUnitOfWork unitOfWork, IRatingService ratingService, IMapper mapper) : base(unitOfWork)
		{
			_ratingService = ratingService;
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet("designerRating")]
		public async Task<ActionResult<RatingBasicOutDTO>> GetDesignerFullRating(DesignerRatingInDTO ratingInDTO)
		{
			Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithRatingsAsync(ratingInDTO.DesignerId);
			if (designer == null) return BadRequest();

			DesignerRating dRating = designer.DesignerRating;

			if (dRating == null)
			{
				return BadRequest("Failed to read designer rating.");
			}

			return Ok(_mapper.Map<RatingFullOutDTO>(dRating));
		}

		[HttpPut("addRating")]
		public async Task<ActionResult<RatingBasicOutDTO>> AddDesignerRating(DesignerRatingInDTO ratingInDTO)
		{
			//EndUser endUser = await _unitOfWork.UserRepository.GetUserByIdAsync<EndUser>(User.GetUserId());
			EndUser endUser = await _unitOfWork.UserRepository.GetUserByIdAsync<EndUser>(4);
			if (endUser == null) return Unauthorized();

			Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithRatingsAsync(ratingInDTO.DesignerId);
			if (designer == null) return BadRequest();

			RatingBasicOutDTO designerRatingOutDTO = await _ratingService.AddDesignerRatingAsync(ratingInDTO, designer, endUser);

			if (designerRatingOutDTO == null)
			{
				return BadRequest("Failed to rating designer.");
			}

			return Ok(designerRatingOutDTO);
		}
	}
}
