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
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Intiri.API.Controllers
{
	public class ProjectsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;
		private readonly ILogger<ProjectsController> _logger;
		private readonly IAccountService _accountService;
		private readonly IFileUploudService _fileUploadService;

		#endregion Fields

		#region Constructors

		public ProjectsController(IUnitOfWork unitOfWork, IMapper mapper, IAccountService accountService, IFileUploudService fileUploadService, ILogger<ProjectsController> logger) : base(unitOfWork)
		{
			_mapper = mapper;
			_accountService = accountService;
			_fileUploadService = fileUploadService;
			_logger = logger;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProjectOutDTO>>> GetUserProjects()
		{
			IEnumerable<Project> projects = await _unitOfWork.ProjectRepository.GetProjectsBasicInfoForUser(User.GetUserId());

			foreach (Project project in projects)
			{
				IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsByIdsList(project.ProjectMoodboards.Select(m => m.Id).ToArray());
				project.ProjectMoodboards = moodboards.ToArray();
			}

			IEnumerable<ProjectOutDTO> projectsOut = _mapper.Map<IEnumerable<ProjectOutDTO>>(projects);

			return Ok(projectsOut);
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

			Moodboard moodboard = null;
			Moodboard newMoodboard = null;

			if (moodboardProjectIn.Moodboard.Id > 0)
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardProjectIn.Moodboard.Id);
				newMoodboard = await _unitOfWork.MoodboardRepository.CloneMoodboardAsync(moodboard, roomDetails);
				// TODO: Find another way to make a difference between designer and client moodboards
				newMoodboard.Designer = null;
				newMoodboard.EndUser = endUser;
			}
			else
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardProjectIn.Moodboard.SourceMoodboardId);
				newMoodboard = _mapper.Map<Moodboard>(moodboardProjectIn.Moodboard);
				newMoodboard.SourceMoodboard = moodboard;
				newMoodboard.IsTemplate = false;
				_unitOfWork.MoodboardRepository.Insert(newMoodboard);

				roomDetails.Moodboard = newMoodboard;

				// TODO: Find another way to make a difference between designer and client moodboards
				newMoodboard.Designer = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(moodboard.DesignerId);
				newMoodboard.EndUser = endUser;

				Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardProjectIn.Moodboard.RoomId);
				newMoodboard.Room = room;

				Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(moodboardProjectIn.Moodboard.StyleId);
				newMoodboard.Style = style;

				IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardProjectIn.Moodboard.ColorPaletteIds);
				newMoodboard.ColorPalettes = colorPalettes.ToArray();

				IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardProjectIn.Moodboard.MaterialIds);
				newMoodboard.Materials = materials.ToArray();

				IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardProjectIn.Moodboard.ProductIds);
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

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(projectIn.RoomDetails);
			IFormFile roomSketchFile = projectIn.RoomDetails.RoomSketchFile;
			if (roomSketchFile != null && roomSketchFile.Length > 0)
			{
				Tuple<HttpStatusCode, string> uploadResult =  await _fileUploadService.TryAddSketchFileAsync(roomDetails, roomSketchFile, FileUploadDestinations.MoodboardRoomSketches);
				if (uploadResult.Item1 != HttpStatusCode.OK)
				{
					return BadRequest(uploadResult.Item2);
				}
			}
			
			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);
			
			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(projectIn.ColorPaletteIds);
			project.ColorPalettes = colorPalettes.ToArray();

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.RoomId);
			project.Room = room;

			Moodboard moodboard = null;
			Moodboard newMoodboard = null;

			if (projectIn.Moodboard.Id > 0)
			{
				// TODO: Find another way to make a difference between designer and client moodboards
				moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(projectIn.Moodboard.Id);
				newMoodboard = await _unitOfWork.MoodboardRepository.CloneMoodboardAsync(moodboard, roomDetails);
				newMoodboard.Designer = null;
				newMoodboard.EndUser = user;
			}
			else
			{
				moodboard = await _unitOfWork.MoodboardRepository.GetByID(projectIn.Moodboard.SourceMoodboardId);
				newMoodboard = _mapper.Map<Moodboard>(projectIn.Moodboard);
				newMoodboard.SourceMoodboard = moodboard;
				newMoodboard.IsTemplate = false;
				
				_unitOfWork.MoodboardRepository.Insert(newMoodboard);

				roomDetails.Moodboard = newMoodboard;

				// TODO: Find another way to make a difference between designer and client moodboards
				newMoodboard.Designer = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(moodboard.DesignerId);
				newMoodboard.EndUser = user;

				Room mRoom = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.Moodboard.RoomId);
				newMoodboard.Room = mRoom;

				Style style = await _unitOfWork.StyleRepository.GetStyleWithStyleImagesByIdAsync(projectIn.Moodboard.StyleId);
				newMoodboard.Style = style;

				IEnumerable<ColorPalette> mColorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(projectIn.Moodboard.ColorPaletteIds);
				newMoodboard.ColorPalettes = mColorPalettes.ToArray();

				IEnumerable<Material> mMaterials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(projectIn.Moodboard.MaterialIds);
				newMoodboard.Materials = mMaterials.ToArray();

				IEnumerable<Product> mProducts = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(projectIn.Moodboard.ProductIds);
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

		// TODO: Fix delete project bug
		[HttpDelete("delete/{projectId}")]
		public async Task<ActionResult> DeleteProject(int projectId)
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetEndUserByIdWithInspirationsAsync(User.GetUserId());
			Project project = endUser.CreatedProjects.FirstOrDefault(p => p.Id == projectId);

			if (project == null)
			{
				return BadRequest($"Project with Id={projectId} not found");
			}

			endUser.CreatedProjects.Remove(project);
			_unitOfWork.ProjectRepository.Delete(project);

			try
			{
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{

				Console.WriteLine(ex.InnerException.Message);
			}
			//if (await _unitOfWork.SaveChanges())
			//{
			//	return Ok();
			//}
			return BadRequest("Problem occured while deleting the project)");
		}

		[HttpPost("moodboard-match")]
		public async Task<ActionResult<MoodboardSuggestionDTO>> FindMoodboardMatches([FromBody] MoodboardMatchInDTO projectIn)
		{
			IEnumerable<Moodboard> roomMoodboards =
				await _unitOfWork.MoodboardRepository.GetMoodboardsByRoomId(projectIn.RoomId);

			Dictionary<Moodboard, double> moodboardToMatchPercentage = new();
			foreach (Moodboard moodboard in roomMoodboards)
			{
				int styleImageMatches = moodboard.Style.StyleImages
					.Select(si => si.Id)
					.ToList()
					.Intersect(projectIn.StyleImageIds)
					.Count();

				int styleImagesCount = moodboard.Style.StyleImages.Count();

				double matchPercentage = (int)(100 * (double)styleImageMatches / styleImagesCount);

				moodboardToMatchPercentage.Add(moodboard, matchPercentage);
			}

			IEnumerable<KeyValuePair<Moodboard, double>> topMatches = moodboardToMatchPercentage
				.OrderByDescending(key => key.Value)
				.Take(3);

			bool isFirst = true;
			Moodboard topMatch = null;
			MoodboardSuggestionDTO suggestions = new()
			{
				Moodboards = new List<MoodboardMatchDTO>(),
				MoodboardFamily = new List<MoodboardOutDTO>()
			};
			foreach (KeyValuePair<Moodboard, double> match in topMatches)
			{
				Moodboard moodboard =
					await _unitOfWork.MoodboardRepository.GetFullMoodboardById(match.Key.Id);

				if (isFirst)
				{
					topMatch = moodboard;
					isFirst = false;
				}

				MoodboardMatchDTO moodboardMatch = new()
				{
					Moodboard = _mapper.Map<MoodboardOutDTO>(moodboard),
					PercentageMatch = (int)match.Value
				};

				suggestions.Moodboards.Add(moodboardMatch);
			}

			IEnumerable<Moodboard> moodboardFamily =
				(await _unitOfWork.MoodboardRepository.GetMoodboardFamily(topMatch)).Take(3);

			suggestions.MoodboardFamily = _mapper.Map<ICollection<MoodboardOutDTO>>(moodboardFamily);

			return Ok(suggestions);
		}

		#endregion Public methods
	}
}
