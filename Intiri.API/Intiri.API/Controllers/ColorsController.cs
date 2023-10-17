using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Room;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
    public class ColorsController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;

        #endregion Fields

        #region Constructors

        public ColorsController(IUnitOfWork unitOfWork, IMapper mapper)
            : base(unitOfWork)
        {
            _mapper = mapper;
        }

        #endregion Constructors

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ColorDTO>>> GetColors()
        {
            IEnumerable<Models.IntiriColor.Color> colors =
                await _unitOfWork.ColorRepository.GetAllColorsAsync();
            IEnumerable<ColorDTO> roomsToReturn = _mapper.Map<IEnumerable<ColorDTO>>(colors);

            return Ok(roomsToReturn);
        }

        [HttpGet("id/{hexValue}")]
        public async Task<ActionResult<ColorDTO>> GetColorById(string hexValue)
        {
            Models.IntiriColor.Color color =
                await _unitOfWork.ColorRepository.GetColorByHexValueAsync(hexValue);

            if (color == null)
            {
                return BadRequest("Color doesn' exist.");
            }

            return _mapper.Map<ColorDTO>(color);
        }

        [HttpPost("add")]
        public async Task<ActionResult<ColorDTO>> AddColorByHexValue(ColorDTO colorDTO)
        {
            if (await _unitOfWork.ColorRepository.IsColorByHexValueExistAsync(colorDTO.HexValue))
            {
                return BadRequest("Color hex value already exist.");
            }

            Models.IntiriColor.Color color = _mapper.Map<Models.IntiriColor.Color>(colorDTO);
            _unitOfWork.ColorRepository.Insert(color);

            if (!await _unitOfWork.SaveChanges())
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete("delete/{hexValue}")]
        public async Task<ActionResult> DeleteColorByHexValue(string hexValue)
        {
            Models.IntiriColor.Color color =
                await _unitOfWork.ColorRepository.GetColorByHexValueAsync(hexValue);

            if (color == null)
            {
                return BadRequest("Color doesn' exist.");
            }

            try
            {
                await _unitOfWork.ColorRepository.Delete(color.Id);
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
