using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models;
using Intiri.API.Models.Rating;
using Intiri.API.Models.DTO.OutputDTO.DesignerRating;

namespace Intiri.API.Services.Interfaces
{
	public interface IRatingService
	{
		Task<RatingBasicOutDTO> AddDesignerRatingAsync(DesignerRatingInDTO ratingInDTO, Designer designer, EndUser endUser);
		Task<bool> InitRatingAndSaveDesignerAsync(Designer designer);
	}
}
