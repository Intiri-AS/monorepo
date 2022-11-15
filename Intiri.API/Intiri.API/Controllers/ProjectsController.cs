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
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Intiri.API.Shared.Enums;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net;
using System.Text.RegularExpressions;

namespace Intiri.API.Controllers
{
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
		public async Task<ActionResult<bool>> CheckIfProjectAlreadyExist( string projectName)
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
		public async Task<ActionResult<ProjectOutDTO>> AddMoodboardToProject([FromBody] MoodboardToProjectInDTO moodboardProjectIn)
		{
			EndUser endUser = await _accountService.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (endUser == null) return Unauthorized();

			Project project = await _unitOfWork.ProjectRepository.GetProjectById(moodboardProjectIn.ProjectId);
			if (project == null)
			{
				return BadRequest($"Project with id '{moodboardProjectIn.ProjectId}' doesn't exists");
			}

			// StartTest
			MoodboardInDTO moodboardInDTO = new MoodboardInDTO()
			{
				Id = moodboardProjectIn.Id,
				Name = moodboardProjectIn.Name,
				SourceMoodboardId = moodboardProjectIn.SourceMoodboardId,
				Description = moodboardProjectIn.Description,
				DesignerId = moodboardProjectIn.DesignerId,
				StyleId = moodboardProjectIn.StyleId,
				RoomId = moodboardProjectIn.RoomId,
				IsTemplate = moodboardProjectIn.IsTemplate,

				MaterialIds = moodboardProjectIn.MaterialIds,
				ColorPaletteIds = moodboardProjectIn.ColorPaletteIds,
				ProductIds = moodboardProjectIn.ProductIds,
			};

			RoomDetailsInDTO roomDetailsInDTO = new RoomDetailsInDTO()
			{
				Shape = moodboardProjectIn.Shape,
				Size = moodboardProjectIn.Size,
				BudgetRate = moodboardProjectIn.BudgetRate,
			};
			// EndTest

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(roomDetailsInDTO);
			IFormFile roomSketchFile = moodboardProjectIn.RoomSketchFile;

			if (roomSketchFile != null && roomSketchFile.Length > 0)
			{
				Tuple<HttpStatusCode, string> uploadResult = await _fileUploadService.TryAddSketchFileAsync(roomDetails, roomSketchFile, FileUploadDestinations.MoodboardRoomSketches);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}
			}

			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);

			Moodboard moodboard = null;
			ClientMoodboard newMoodboard = null;

			if (moodboardInDTO.Id > 0)
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardInDTO.Id);
				newMoodboard = await _unitOfWork.MoodboardRepository.CloneMoodboardAsync(moodboard, roomDetails, project);
				newMoodboard.Designer = endUser;
				
			}
			else
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardInDTO.SourceMoodboardId);
				newMoodboard = _mapper.Map<ClientMoodboard>(moodboardInDTO);
				newMoodboard.SourceMoodboardId = moodboard.Id;
				newMoodboard.IsTemplate = false;
				_unitOfWork.MoodboardRepository.Insert(newMoodboard);

				roomDetails.Moodboard = newMoodboard;
				newMoodboard.Designer = endUser;

				Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardInDTO.RoomId);
				newMoodboard.Room = room;

				Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(moodboardInDTO.StyleId);
				newMoodboard.Style = style;

				IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardInDTO.ColorPaletteIds);
				newMoodboard.ColorPalettes = colorPalettes.ToArray();

				IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardInDTO.MaterialIds);
				newMoodboard.Materials = materials.ToArray();

				IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardInDTO.ProductIds);
				newMoodboard.Products = products.ToArray();
			}

			project.ProjectMoodboards.Add(newMoodboard);

			if (await _unitOfWork.SaveChanges())
			{
				project.ProjectMoodboards.Add(newMoodboard);
				return Ok(_mapper.Map<ProjectOutDTO>(project));
			}

			return BadRequest("Problem occured while adding moodboard to project");
		}

		[HttpPost("create")]
		public async Task<ActionResult<ProjectOutDTO>> Create([FromBody] ProjectInDTO projectIn)
		{
			if (await _unitOfWork.ProjectRepository.DoesAnyExist(p => p.Name == projectIn.Name))
			{
				return BadRequest($"Project with name '{projectIn.Name}' already exists");
			}

			Project project = _mapper.Map<Project>(projectIn);

			EndUser user = await _accountService.GetUserByIdAsync<EndUser>(User.GetUserId());
			if (user == null) return Unauthorized();

			project.EndUser = user;

			// StartTest
			MoodboardInDTO moodboardInDTO = new MoodboardInDTO()
			{
				Id = projectIn.Id,
				Name = projectIn.Name,
				SourceMoodboardId = projectIn.SourceMoodboardId,
				Description = projectIn.Description,
				DesignerId = projectIn.DesignerId,
				StyleId = projectIn.StyleId,
				RoomId = projectIn.RoomId,
				IsTemplate = projectIn.IsTemplate,

				MaterialIds = projectIn.MaterialIds,
				ColorPaletteIds =projectIn.ColorPaletteIds,
				ProductIds = projectIn.ProductIds,
			};

			RoomDetailsInDTO roomDetailsInDTO = new RoomDetailsInDTO()
			{
				Shape = projectIn.Shape,
				Size = projectIn.Size,
				BudgetRate = projectIn.BudgetRate,
			};
			// EndTest

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(roomDetailsInDTO);
			IFormFile roomSketchFile = projectIn.RoomSketchFile;

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

			Moodboard moodboard = null;
			ClientMoodboard newMoodboard = null;

			if (moodboardInDTO.Id > 0)
			{
				// TODO: Find another way to make a difference between designer and client moodboards
				moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardInDTO.Id);
				newMoodboard = await _unitOfWork.MoodboardRepository.CloneMoodboardAsync(moodboard, roomDetails, project);
				newMoodboard.Designer = user;
			}
			else
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardInDTO.SourceMoodboardId);
				newMoodboard = _mapper.Map<ClientMoodboard>(moodboardInDTO);
				newMoodboard.SourceMoodboardId = moodboard.Id;
				newMoodboard.IsTemplate = false;

				_unitOfWork.MoodboardRepository.Insert(newMoodboard);

				roomDetails.Moodboard = newMoodboard;

				newMoodboard.Designer = user;

				Room mRoom = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardInDTO.RoomId);
				newMoodboard.Room = mRoom;

				Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(moodboardInDTO.StyleId);
				newMoodboard.Style = style;

				IEnumerable<ColorPalette> mColorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardInDTO.ColorPaletteIds);
				newMoodboard.ColorPalettes = mColorPalettes.ToArray();

				IEnumerable<Material> mMaterials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardInDTO.MaterialIds);
				newMoodboard.Materials = mMaterials.ToArray();

				IEnumerable<Product> mProducts = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardInDTO.ProductIds);
				newMoodboard.Products = mProducts.ToArray();
			}

			_unitOfWork.ProjectRepository.Insert(project);

			project.ProjectMoodboards.Add(newMoodboard);
			user.CreatedProjects.Add(project);

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
