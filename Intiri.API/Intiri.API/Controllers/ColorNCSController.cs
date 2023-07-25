using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
    public class ColorNCSController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;

        #endregion Fields

        #region Constructors

        public ColorNCSController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
        {
            _mapper = mapper;
        }

        #endregion Constructors

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ColorNCSOutDTO>>> GetColorsNCS()
        {
            IEnumerable<ColorNCS> colors = await _unitOfWork.ColorNCSRepository.GetAllColorsNCSAsNoTrackingAsync();
            IEnumerable<ColorNCSOutDTO> toReturn = _mapper.Map<IEnumerable<ColorNCSOutDTO>>(colors);

            return Ok(toReturn);
        }
    }
}
