using AutoMapper;
using CloudinaryDotNet.Actions;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Intiri.API.Shared.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Text.RegularExpressions;

namespace Intiri.API.Controllers
{
	[Authorize(Policy = PolicyNames.ClientPolicy)]
	public class ProjectsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ILogger<ProjectsController> _logger;
		private readonly IAccountService _accountService;
		private readonly IFileUploudService _fileUploadService;
		private readonly IMoodboardSevice _moodboardSevice;

		#endregion Fields

		#region Constructors

		public ProjectsController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService,
			IFileUploudService fileUploadService, IMoodboardSevice moodboardSevice, ILogger<ProjectsController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_accountService = accountService;
			_fileUploadService = fileUploadService;
			_logger = logger;
			_moodboardSevice = moodboardSevice;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProjectOutDTO>>> GetUserProjects()
		{
			IEnumerable<Project> projects = await _unitOfWork.ProjectRepository.GetProjectsBasicInfoForUser(User.GetUserId());

			foreach (Project project in projects)
			{
				IEnumerable<ClientMoodboard> moodboards = await _unitOfWork.MoodboardRepository.GetClientMoodboardsByIdsList(project.ProjectMoodboards.Select(m => m.Id).ToArray());
				project.ProjectMoodboards = moodboards.ToArray();
			}

			IEnumerable<ProjectOutDTO> projectsOut = _mapper.Map<IEnumerable<ProjectOutDTO>>(projects);

			return Ok(projectsOut);
		}

		[HttpGet("isProjectExist/{projectName}")]
		public async Task<ActionResult<bool>> CheckIfProjectAlreadyExist(string projectName)
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetEndUserByIdWithProjectsAsync(User.GetUserId());
			if (endUser == null) return Unauthorized();

			return endUser.CreatedProjects.Any(project => project.Name == projectName);
		}

		[HttpGet("lastProject")]
		public async Task<ActionResult<IEnumerable<ProjectOutDTO>>> GetUserLastProject()
		{
			Project project = await _unitOfWork.ProjectRepository.GetLastProjectForUser(User.GetUserId());
			ProjectOutDTO projectOut = _mapper.Map<ProjectOutDTO>(project);

			return Ok(projectOut);
		}

		[HttpGet("id/{projectId}")]
		public async Task<ActionResult<ProjectOutDTO>> GetProjectById(int projectId)
		{
			Project project = await _unitOfWork.ProjectRepository.GetProjectById(projectId);

			ProjectOutDTO projectOut = _mapper.Map<ProjectOutDTO>(project);

			return Ok(projectOut);
		}

		[HttpGet("name/{projectName}")]
		public async Task<ActionResult<ProjectOutDTO>> GetProjectByName(string projectName)
		{
			Project project = await _unitOfWork.ProjectRepository.GetProjectByName(projectName);

			ProjectOutDTO projectOut = _mapper.Map<ProjectOutDTO>(project);

			return Ok(projectOut);
		}

		[HttpPost("addMoodboard")]
		public async Task<ActionResult<ProjectOutDTO>> AddMoodboardToProject([FromForm] MoodboardToProjectInDTO moodboardProjectIn)
		{
			EndUser endUser = await _accountService.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (endUser == null) return Unauthorized();

			Project project = await _unitOfWork.ProjectRepository.GetProjectById(moodboardProjectIn.ProjectId);
			if (project == null)
			{
				return BadRequest($"Project with id '{moodboardProjectIn.ProjectId}' doesn't exists");
			}

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(moodboardProjectIn.RoomDetails);
			IFormFile roomSketchFile = moodboardProjectIn.RoomDetails.RoomSketchFile;

			if (roomSketchFile != null && roomSketchFile.Length > 0)
			{
				Tuple<HttpStatusCode, string> uploadResult = await _fileUploadService.TryAddSketchFileAsync(roomDetails, roomSketchFile, FileUploadDestinations.MoodboardRoomSketches);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}
			}

			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);

			ClientMoodboard newMoodboard = await _moodboardSevice.CreateClientMoodboardAsync(project, roomDetails, moodboardProjectIn.Moodboard, endUser);

			project.ProjectMoodboards.Add(newMoodboard);

			if (await _unitOfWork.SaveChanges())
			{
				project.ProjectMoodboards.Add(newMoodboard);
				return Ok(_mapper.Map<ProjectOutDTO>(project));
			}

			return BadRequest("Problem occured while adding moodboard to project");
		}

		[HttpPost("create")]
		public async Task<ActionResult<ProjectOutDTO>> Create([FromForm] ProjectInDTO projectIn)
		{
			if (await _unitOfWork.ProjectRepository.DoesAnyExist(p => p.Name == projectIn.ProjectName))
			{
				return BadRequest($"Project with name '{projectIn.ProjectName}' already exists");
			}

			EndUser user = await _accountService.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (user == null) return Unauthorized();

			Project project = _mapper.Map<Project>(projectIn);
			project.EndUser = user;

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(projectIn.RoomDetails);
			IFormFile roomSketchFile = projectIn.RoomDetails.RoomSketchFile;

			if (roomSketchFile != null && roomSketchFile.Length > 0)
			{
				Tuple<HttpStatusCode, string> uploadResult = await _fileUploadService.TryAddSketchFileAsync(roomDetails, roomSketchFile, FileUploadDestinations.MoodboardRoomSketches);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}
			}

			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);

			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(projectIn.ProjectColorPaletteIds);
			project.ColorPalettes = colorPalettes.ToArray();

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.ProjectRoomId);
			project.Room = room;

			ClientMoodboard newMoodboard = await _moodboardSevice.CreateClientMoodboardAsync(project, roomDetails, projectIn.Moodboard, user);

			_unitOfWork.ProjectRepository.Insert(project);

			//project.ProjectMoodboards.Add(newMoodboard);
			//user.CreatedProjects.Add(project);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProjectOutDTO>(project));
			}

			return BadRequest("Problem occured while adding project");
		}

		// TODO: Clear moodboard cloudinary sketch file
		[HttpDelete("delete/{projectId}")]
		public async Task<ActionResult> DeleteProject(int projectId)
		{
			Project project = await _unitOfWork.ProjectRepository.GetProjectWithCollections(projectId);

			if (project == null)
			{
				return BadRequest($"Project with Id={projectId} not found");
			}

			if (project.EndUser.Id != User.GetUserId())
			{
				return Unauthorized();
			}

			try
			{
				_unitOfWork.ProjectRepository.Delete(project);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}

		[HttpPost("moodboardMatch")]
		public async Task<ActionResult<MoodboardSuggestionDTO>> FindMoodboardMatches([FromBody] MoodboardMatchInDTO projectIn)
		{
			if (projectIn == null) return BadRequest();

			MoodboardSuggestionDTO suggestions = new()
			{
				Moodboards = new List<MoodboardMatchDTO>(),
				MoodboardFamily = new List<MoodboardOutDTO>()
			};

			suggestions.Moodboards = await _moodboardSevice.FindMoodboardMatchesAsync(projectIn);

			if (suggestions.Moodboards == null )
			{
				return NotFound();
			}

			MoodboardOutDTO highMatch = suggestions.Moodboards.First().Moodboard;

			suggestions.MoodboardFamily = await _moodboardSevice.GetMoodboardStyleFamilyAsync(highMatch.Style.Id, highMatch.Room.Id);

			return Ok(suggestions);
		}

		// Get moodboards with target style ID and with all rooms other than the target room ID
		[HttpGet("moodboardStyleFamily/{styleId}/{roomId}")]
		public async Task<ActionResult<IEnumerable<MoodboardOutDTO>>> GetMoodboardStyleFamily(int styleId, int roomId)
		{
			if (!await _unitOfWork.StyleRepository.DoesAnyExist(st => st.Id == styleId))
			{
				return BadRequest("Style doesn't exist.");
			}

			if (!await _unitOfWork.RoomRepository.DoesAnyExist(ro => ro.Id == roomId))
			{
				return BadRequest("Room doesn't exist.");
			}

			IEnumerable<MoodboardOutDTO> moodboardFamily = await _moodboardSevice.GetMoodboardStyleFamilyAsync(styleId, roomId);

			return Ok(moodboardFamily);
		}

		#endregion Public methods
	}
}
