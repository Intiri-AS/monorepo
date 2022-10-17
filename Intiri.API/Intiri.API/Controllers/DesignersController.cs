using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace Intiri.API.Controllers
{
	public class DesignersController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public DesignersController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesignerBasicInfo()
		{ 
			IEnumerable<Designer> dUsers = await _unitOfWork.UserRepository.GetDesignerUsersAsync();

			IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(dUsers);

			return Ok(usersToReturn);
		}

		[HttpGet("contactDesigners")]
		public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesignerWithStyleImages()
		{
			IEnumerable<Designer> dUsers = await _unitOfWork.UserRepository.GetDesignerUsersAsync();

			foreach (Designer designer in dUsers)
			{
				IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsWithImagesByIds(designer.CreatedMoodboards.Select(m => m.Id).ToArray());
				designer.CreatedMoodboards = moodboards.ToArray();
			}

			IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(dUsers);

			return Ok(usersToReturn);
		}

		[HttpGet("id/{designerId}")]
		public async Task<ActionResult<DesignerOutDTO>> GetAllDesigneWithMoodboardImages(int designerId)
		{
			Designer dUser = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(designerId);

			if (dUser == null)
			{
				return BadRequest("Designer user not found.");
			}

			IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsWithImagesByIds(dUser.CreatedMoodboards.Select(m => m.Id).ToArray());
			dUser.CreatedMoodboards = moodboards.ToArray();

			DesignerOutDTO userToReturn = _mapper.Map<DesignerOutDTO>(dUser);

			return Ok(userToReturn);
		}
	}
}
