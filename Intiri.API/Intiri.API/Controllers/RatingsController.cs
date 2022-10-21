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
using Intiri.API.Models.DTO.InputDTO.Moodboard;

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
		public async Task<ActionResult<RatingFullOutDTO>> GetDesignerFullRating()
		{
			Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithRatingsAsync(User.GetUserId());
			if (designer == null) return Unauthorized("Invalid designer.");

			DesignerRating dRating = designer.DesignerRating;

			if (dRating == null)
			{
				return BadRequest("Failed to read designer rating.");
			}

			return Ok(_mapper.Map<RatingFullOutDTO>(dRating));
		}

		[HttpGet("isRated/id/{designerId}")]
		public async Task<ActionResult<bool>> GetIsDesignerAlreadyRated(int designerId)
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (endUser == null) return true;

			if (!await _unitOfWork.UserRepository.IsDesignerExistByAsync(designerId))
			{
				return BadRequest("Designer not found");
			}

			bool isDesignerRated = await _unitOfWork.DesignerReviewRepository.IsDesingerAlreadyRatedByUserAsync(endUser.Id, designerId);

			return Ok(isDesignerRated);
		}

		[HttpPut("addRating")]
		public async Task<ActionResult<RatingBasicOutDTO>> AddDesignerRating(DesignerRatingInDTO ratingInDTO)
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (endUser == null) return Unauthorized("Invalid client.");

			Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithRatingsAsync(ratingInDTO.DesignerId);
			if (designer == null) return BadRequest("Designer not found");

			RatingBasicOutDTO designerRatingOutDTO = await _ratingService.AddDesignerRatingAsync(ratingInDTO, designer, endUser);

			if (designerRatingOutDTO == null) return BadRequest("Failed to rating designer.");

			return Ok(designerRatingOutDTO);
		}
	}
}
