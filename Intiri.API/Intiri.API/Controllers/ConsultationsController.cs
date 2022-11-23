using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.RoleNames;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Twilio.Jwt.Taskrouter;

namespace Intiri.API.Controllers
{
	[Authorize]
	public class ConsultationsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ConsultationsController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		[HttpGet]
		public async Task<ActionResult<ConsulatationDTO>> GetConsultation()
		{
			Consultation consultation = await _unitOfWork.ConsulatationRepository.GetByID(1);

			return Ok(new ConsulatationDTO { Price = consultation.Price, Duration = consultation.Duration });
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPatch("update")]
		public async Task<ActionResult<ConsulatationDTO>> UpdateConsultation(ConsulatationDTO consulatationDTO)
		{
			if (!User.IsInRole(RoleNames.Admin))
			{
				return Unauthorized();
			}

			Consultation consultation = await _unitOfWork.ConsulatationRepository.GetByID(1);

			_mapper.Map(consulatationDTO, consultation);
			_unitOfWork.ConsulatationRepository.Update(consultation);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ConsulatationDTO>(consultation));
			}

			return BadRequest();
		}
	}
}
