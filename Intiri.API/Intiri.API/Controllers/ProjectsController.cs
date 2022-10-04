using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.DTO.OutputDTO.Style;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Controllers
{
	public class ProjectsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public ProjectsController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<ProjectOutDTO>>> GetUserProjects()
		{
			IEnumerable<Project> projects = await _unitOfWork.ProjectRepository.GetProjectsBasicInfoForUser(User.GetUserId());

			foreach (Project project in projects)
			{
				Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(project.ProjectMoodboards.First().Id);
				project.ProjectMoodboards.Add(moodboard);
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
			Project project = await _unitOfWork.ProjectRepository.GetByID(projectId);

			ProjectOutDTO projectOut = _mapper.Map<ProjectOutDTO>(project);

			return Ok(projectOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<int>> Add([FromBody] ProjectInDTO projectIn)
		{
			if (await _unitOfWork.ProjectRepository.DoesAnyExist(p => p.Name == projectIn.Name))
			{
				return BadRequest($"Project with name '{projectIn.Name}' already exists");
			}

			Project project = _mapper.Map<Project>(projectIn);

			User user = await _unitOfWork.UserRepository.GetByID(User.GetUserId());
			project.EndUser = user;

			RoomDetails roomDetails = _mapper.Map<RoomDetails>(projectIn.RoomDetails);
			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);

			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(projectIn.ColorPaletteIds);
			project.ColorPalettes = colorPalettes.ToArray();

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.RoomId);
			project.Room = room;

			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(projectIn.MoodboardIds.FirstOrDefault());
			Moodboard newMoodboard = await _unitOfWork.MoodboardRepository.CloneMoodboardAsync(moodboard);

			_unitOfWork.ProjectRepository.Insert(project);
			project.ProjectMoodboards.Add(newMoodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProjectOutDTO>(project));
			}

			return BadRequest("Problem occured while adding project");
		}

		[HttpDelete("delete/{projectId}")]
		public async Task<ActionResult> DeleteProject(int projectId)
		{
			Project project = await _unitOfWork.ProjectRepository.GetByID(projectId);

			if (project == null)
			{
				return BadRequest($"Project with Id={projectId} not found");
			}

			await _unitOfWork.ProjectRepository.Delete(projectId);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok();
			}
			return BadRequest("Problem occured while deleting the project)");
		}

		[HttpPost("moodboard-match")]
		public async Task<ActionResult<MoodboardSuggestionDTO>> FindMoodboardMatches([FromBody] ProjectInDTO projectIn)
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

				double matchPercentage = (int)(100 *(double)styleImageMatches / styleImagesCount);

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
