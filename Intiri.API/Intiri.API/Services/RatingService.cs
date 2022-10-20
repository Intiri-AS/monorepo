using AutoMapper;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.DesignerRating;
using Intiri.API.Models.Rating;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.Design;
using System.Net.Mail;

namespace Intiri.API.Services
{
	public class RatingService : IRatingService
	{
		#region Fields

		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructor

		public RatingService(IUnitOfWork unitOfWork, IMapper mapper)
		{
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		#endregion Constructor

		public async Task<bool> InitRatingAndSaveDesignerAsync(Designer designer)
		{
			DesignerRating designerRating = new DesignerRating();
			designerRating.Designer = designer;
			_unitOfWork.DesignerRatingRepository.Insert(designerRating);
			designer.DesignerRating = designerRating;

			return await _unitOfWork.SaveChanges();
		}

		public async Task<RatingBasicOutDTO> AddDesignerRatingAsync(DesignerRatingInDTO ratingInDTO, Designer designer, EndUser endUser)
		{
			DesignerRating dRating = designer.DesignerRating;

			double ratingsSum = dRating.FiveStar + dRating.FourStar + dRating.ThreeStar + dRating.TwoStar + dRating.OneStar;
			dRating.AverageRating = (dRating.AverageRating * ratingsSum + ratingInDTO.Rating) / (ratingsSum + 1);
			//dRating.AverageRating = Math.Round(rating, 1);

			switch (ratingInDTO.Rating)
			{
				case 1:
					++dRating.OneStar;		break;
				case 2:
					++dRating.TwoStar;		break;
				case 3:
					++dRating.ThreeStar;	break;
				case 4:
					++dRating.FourStar;		break;
				case 5:
					++dRating.FiveStar;		break;
				default:
					break;
			}

			_unitOfWork.DesignerRatingRepository.Update(dRating);

			DesignerReview designerReview = new DesignerReview()
			{
				Rating = ratingInDTO.Rating,
				Comment = ratingInDTO.Comment,
				Designer = designer,
				EndUser = endUser
			};

			_unitOfWork.DesignerReviewRepository.Insert(designerReview);
			designer.DesignerReviews.Add(designerReview);

			return await _unitOfWork.SaveChanges() ? _mapper.Map<RatingBasicOutDTO>(dRating) : null;
		}
	}
}
