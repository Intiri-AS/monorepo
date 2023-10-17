using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Services.Interfaces;
using Intiri.API.Extension;
using Intiri.API.Models.Rating;
using Intiri.API.Models.Payment;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Intiri.API.DataAccess.Repository;
using Microsoft.AspNetCore.Authorization;
using Intiri.API.Models.PolicyNames;
using CloudinaryDotNet.Actions;
using Intiri.API.Services;
using Intiri.API.Shared;
using System.Net;
using Microsoft.AspNetCore.Identity;
using Intiri.API.Models.UserLanguage;

namespace Intiri.API.Controllers
{
    [Authorize]
    public class DesignersController : BaseApiController
    {
        #region Fields

        private readonly IMapper _mapper;
        private readonly IRatingService _ratingService;
        private readonly IAccountService _accountService;
        private readonly IFileUploudService _fileUploadService;

        #endregion Fields

        #region Constructors

        public DesignersController(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IRatingService ratingService,
            IAccountService accountService,
            IFileUploudService fileUploadService
        )
            : base(unitOfWork)
        {
            _mapper = mapper;
            _ratingService = ratingService;
            _accountService = accountService;
            _fileUploadService = fileUploadService;
        }

        #endregion Constructors

        // Admin Panel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesignerBasicInfo()
        {
            IEnumerable<Designer> dUsers =
                await _unitOfWork.UserRepository.GetDesignersWithRatingsAsync();

            IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(
                dUsers
            );

            return Ok(usersToReturn);
        }

        //EndUser
        [HttpGet("contactDesigners")]
        public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesignerWithStyleImages()
        {
            IEnumerable<Designer> dUsers =
                await _unitOfWork.UserRepository.GetDesignersWithRatingsAsync();

            foreach (Designer designer in dUsers)
            {
                IEnumerable<Moodboard> moodboards =
                    await _unitOfWork.MoodboardRepository.GetMoodboardsWithImagesByIds(
                        designer.CreatedMoodboards.Select(m => m.Id).ToArray()
                    );
                designer.CreatedMoodboards = moodboards.ToArray();
            }

            IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(
                dUsers
            );

            return Ok(usersToReturn);
        }

        // EndUser panel
        [HttpGet("id/{designerId}")]
        public async Task<ActionResult<DesignerOutDTO>> GetAllDesignerWithMoodboardImages(
            int designerId
        )
        {
            Designer dUser = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(designerId);

            if (dUser == null)
            {
                return BadRequest("Designer user not found.");
            }

            IEnumerable<Moodboard> moodboards =
                await _unitOfWork.MoodboardRepository.GetMoodboardsByIdsList(
                    dUser.CreatedMoodboards.Select(m => m.Id).ToArray()
                );
            dUser.CreatedMoodboards = moodboards.ToArray();

            DesignerOutDTO userToReturn = _mapper.Map<DesignerOutDTO>(dUser);

            return Ok(userToReturn);
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpGet("withReviews/id/{designerId}")]
        public async Task<ActionResult<DesignerOutDTO>> GetAllDesignerWithMoodboardsAndReviews(
            int designerId
        )
        {
            Designer dUser = await _unitOfWork.UserRepository.GetDesignerByIdWithReviewsAsync(
                designerId
            );

            if (dUser == null)
            {
                return BadRequest("Designer user not found.");
            }

            IEnumerable<Moodboard> moodboards =
                await _unitOfWork.MoodboardRepository.GetMoodboardsByIdsList(
                    dUser.CreatedMoodboards.Select(m => m.Id).ToArray()
                );
            dUser.CreatedMoodboards = moodboards.ToArray();

            DesignerWithReviewsOutDTO userToReturn = _mapper.Map<DesignerWithReviewsOutDTO>(dUser);

            return Ok(userToReturn);
        }

        [Authorize(Policy = PolicyNames.DesignerPolicy)]
        [HttpGet("designerClients")]
        public async Task<ActionResult<IEnumerable<DesignerClientOutDTO>>> GetAllDesignerClients()
        {
            Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithClientsAsync(
                User.GetUserId()
            );
            if (designer == null)
                return Unauthorized("Invalid designer.");

            IEnumerable<DesignerClientOutDTO> clientsToReturn = _mapper.Map<
                IEnumerable<DesignerClientOutDTO>
            >(designer.ConsultationPaymentsReceived);

            return Ok(clientsToReturn);
        }

        [Authorize(Policy = PolicyNames.DesignerPolicy)]
        [HttpGet("clientConsultation/{consultationId}")]
        public async Task<ActionResult<DesignerClientFullOutDTO>> GetDesignerClient(
            int consultationId
        )
        {
            Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithClientsAsync(
                User.GetUserId()
            );
            if (designer == null)
                return Unauthorized("Invalid designer.");

            ConsultationPayment consultationPayment =
                await _unitOfWork.ConsultationPaymentRepository.GetFullConsultationPaymentByIdAsync(
                    consultationId
                );

            DesignerClientFullOutDTO clientFullOutDTO = _mapper.Map<DesignerClientFullOutDTO>(
                consultationPayment
            );

            return Ok(clientFullOutDTO);
        }

        [Authorize(Policy = PolicyNames.DesignerPolicy)]
        [HttpGet("statistic")]
        public async Task<ActionResult<DesignerStatisticsOutDTO>> GetDesignerStatistics()
        {
            Designer designer = await _unitOfWork.UserRepository.GetDesignerByIdWithStatisticsAsync(
                User.GetUserId()
            );
            if (designer == null)
                return Unauthorized("Invalid designer.");

            ICollection<ConsultationPayment> payments = designer.ConsultationPaymentsReceived;

            #region counsultations number version

            //// [key] -> clientId, [value] -> counsultations number
            //Dictionary<int, int> clientsWithConsultation = new Dictionary<int, int>();
            //foreach (ConsultationPayment cp in payments)
            //{
            //	clientsWithConsultation[cp.Payer.Id] = clientsWithConsultation.ContainsKey(cp.Payer.Id)
            //		? clientsWithConsultation[cp.Payer.Id] + cp.NumberOfConsultations : cp.NumberOfConsultations;
            //}

            //float consultationPrice = (await _unitOfWork.ConsulatationRepository.GetByID(1)).Price;

            //DesignerStatisticsOutDTO designerStatisticsOutDTO = new DesignerStatisticsOutDTO()
            //{
            //	ClientsNumber = clientsWithConsultation.Keys.Count,
            //	TotalIncome = clientsWithConsultation.Values.Sum() * consultationPrice
            //};

            #endregion

            #region paymant amount version

            HashSet<int> clients = new();
            double totalIncome = 0;

            foreach (ConsultationPayment cp in payments)
            {
                if (cp.Payer != null)
                {
                    clients.Add(cp.Payer.Id);
                }

                totalIncome += cp.Amount;
            }

            DesignerStatisticsOutDTO designerStatisticsOutDTO = new DesignerStatisticsOutDTO()
            {
                ClientsNumber = clients.Count,
                TotalIncome = totalIncome
            };

            #endregion

            return Ok(designerStatisticsOutDTO);
        }

        [Authorize(Policy = PolicyNames.AdminPolicy)]
        [HttpPatch("update/{designerId}")]
        public async Task<ActionResult<UserOutDTO>> UpdateDesigner(
            int designerId,
            [FromForm] DesignerInDTO designerUpdateDto
        )
        {
            Designer dUser = await _unitOfWork.UserRepository.GetDesignerByIdAsync(designerId);

            if (dUser == null)
            {
                return NotFound();
            }

            IList<string> userRoles = await _accountService.GetUserRolesAsync(dUser);
            if (
                !string.IsNullOrEmpty(designerUpdateDto.Role)
                && userRoles[0] != designerUpdateDto.Role
            )
            {
                IdentityResult result = await _accountService.AddUserToRoleAsync(
                    dUser,
                    designerUpdateDto.Role
                );
                if (!result.Succeeded)
                    return BadRequest("Failed to add to roles");

                result = await _accountService.RemoveUserFromRoleAsync(dUser, userRoles[0]);
                if (!result.Succeeded)
                    return BadRequest("Failed to remove from roles");
            }

            _mapper.Map(designerUpdateDto, dUser);

            if (string.IsNullOrEmpty(dUser.Language))
            {
                dUser.Language = Language.Norway;
            }

            _unitOfWork.UserRepository.UpdateUser(dUser);

            if (await _unitOfWork.SaveChanges())
            {
                return _mapper.Map<DesignerUpdateOutDTO>(dUser);
            }

            return BadRequest("Failed to update designer.");
        }

        [AllowAnonymous]
        [HttpGet("getDesigners")]
        public async Task<ActionResult<IEnumerable<DesignerOutDTO>>> GetAllDesigners()
        {
            IEnumerable<Designer> dUsers = await _unitOfWork.UserRepository.GetAllDesigners();
            IEnumerable<DesignerOutDTO> usersToReturn = _mapper.Map<IEnumerable<DesignerOutDTO>>(
                dUsers
            );

            return Ok(usersToReturn);
        }

        [AllowAnonymous]
        [HttpGet("getDesignerProfile/id/{designerId}")]
        public async Task<ActionResult<DesignerOutDTO>> GetDesignerProfile(int designerId)
        {
            Designer dUser = await _unitOfWork.UserRepository.GetDesignerProfile(designerId);

            if (dUser == null)
            {
                return BadRequest("Designer user not found.");
            }

            DesignerOutDTO userToReturn = _mapper.Map<DesignerOutDTO>(dUser);

            return Ok(userToReturn);
        }
    }
}
