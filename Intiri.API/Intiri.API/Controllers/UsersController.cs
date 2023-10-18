using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Partner;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Payment;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Intiri.API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        #region Fields

        //private readonly ICloudinaryService _fileUploadService;
        private readonly IFileUploudService _fileUploadService;
        private readonly ILogger<UsersController> _logger;
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;

        #endregion Fields

        #region ctors

        public UsersController(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IAccountService accountService,
            IFileUploudService fileUploadService,
            ILogger<UsersController> logger
        )
            : base(unitOfWork)
        {
            _mapper = mapper;
            _logger = logger;
            _accountService = accountService;
            _fileUploadService = fileUploadService;
        }

        #endregion ctors

        #region Public methods

        [HttpGet("endUsers")]
        public async Task<ActionResult<IEnumerable<UserOutDTO>>> GetAllEndUsers()
        {
            IEnumerable<EndUser> users = await _unitOfWork.UserRepository.GetUsersAsync<EndUser>();
            IEnumerable<UserOutDTO> usersToReturn = _mapper.Map<IEnumerable<UserOutDTO>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("profile")]
        public async Task<ActionResult<UserOutDTO>> GetUserProfile()
        {
            User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

            if (user == null)
            {
                return Unauthorized("Invalid user.");
            }

            return _mapper.Map<UserOutDTO>(user);
        }

        [HttpPost("addPhoto")]
        public async Task<ActionResult<UserPhotoPathOutDTO>> AddPhoto(
            [FromForm] UserPhotoFileInDTO inFile
        )
        {
            User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

            if (user == null)
            {
                return Unauthorized("Invalid clent.");
            }

            IFormFile photoFile = inFile.PhotoPath;

            if (photoFile != null && photoFile.Length > 0)
            {
                Tuple<HttpStatusCode, string, ImageUploadResult> uploadResult =
                    await _fileUploadService.TryAddFileToCloudinaryAsync(
                        photoFile,
                        FileUploadDestinations.UserProfilePhotos,
                        user.PublicId
                    );

                if (uploadResult.Item1 != HttpStatusCode.OK)
                {
                    return BadRequest(uploadResult.Item2);
                }

                user.PhotoPath = uploadResult.Item3.SecureUrl.AbsoluteUri;
                user.PublicId = uploadResult.Item3.PublicId;

                _unitOfWork.UserRepository.UpdateUser(user);

                if (await _unitOfWork.SaveChanges())
                {
                    return Ok(new UserPhotoPathOutDTO() { PhotoPath = user.PhotoPath });
                }
            }

            return BadRequest("Problem adding user photo.");
        }

        [HttpPut("profile")]
        public async Task<ActionResult<UserOutDTO>> UpdateUser(UserUpdateInDTO userUpdateDto)
        {
            User user = await _accountService.GetUserByUsernameAsync(User.GetUsername());

            if (user == null)
            {
                return Unauthorized("Invalid user.");
            }

            _mapper.Map(userUpdateDto, user);
            _unitOfWork.UserRepository.UpdateUser(user);

            if (await _unitOfWork.SaveChanges())
            {
                return _mapper.Map<UserOutDTO>(user);
            }

            return BadRequest("Failed to update user.");
        }

        #endregion Public methods
    }
}
