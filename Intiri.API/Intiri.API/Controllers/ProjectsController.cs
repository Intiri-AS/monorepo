using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Product;
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
		public async Task<ActionResult<IEnumerable<ProjectOutDTO>>> GetProjects()
		{
			IEnumerable<Project> projects = await _unitOfWork.ProjectRepository.GetProjects();

			foreach (Project project in projects)
			{
				Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(project.Moodboard.Id);

				project.Moodboard = moodboard;
			}

			IEnumerable<ProjectOutDTO> projectsOut = _mapper.Map<IEnumerable<ProjectOutDTO>>(projects);

			return Ok(projectsOut);
		}

		[HttpGet("id/{projectId}")]
		public async Task<ActionResult<ProjectOutDTO>> GetProjectById(int projectId)
		{
			Project project = await _unitOfWork.ProjectRepository.GetByID(projectId);

			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(project.Moodboard.Id);

			project.Moodboard = moodboard;

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

			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			ColorPalette colorPalette = await _unitOfWork.ColorPaletteRepository.GetColorPaletteById(projectIn.ColorPaletteId);
			project.ColorPalette = colorPalette;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.RoomId);
			project.Room = room;

			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(projectIn.MoodboardId);
			project.Moodboard = moodboard;

			_unitOfWork.ProjectRepository.Insert(project);

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
				return Ok($"Succesfully deleted project with Id={projectId}");
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
