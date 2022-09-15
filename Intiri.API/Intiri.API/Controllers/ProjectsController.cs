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

			IEnumerable<RoomDetails> roomDetails = await _unitOfWork.RoomDetailsRepository.GetRoomDetails();

			foreach (Project project in projects)
			{
				project.RoomDetails = roomDetails.SingleOrDefault(rd => rd.ProjectId == project.Id);
			}

			IEnumerable<ProjectOutDTO> projectsOut = _mapper.Map<IEnumerable<ProjectOutDTO>>(projects);

			return Ok(projectsOut);
		}

		[HttpGet("id/{projectId}")]
		public async Task<ActionResult<ProjectOutDTO>> GetProjectById(int projectId)
		{
			Project project = await _unitOfWork.ProjectRepository.GetByID(projectId);

			RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.SingleOrDefaultAsync(rd => rd.ProjectId == project.Id);

			project.RoomDetails = roomDetails;

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

			RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.SingleOrDefaultAsync(rd => rd.ProjectId == project.Id);
			project.RoomDetails = roomDetails;

			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			ColorPallete colorPallete = await _unitOfWork.ColorPalleteRepository.GetColorPalleteById(projectIn.ColorPalleteId);
			project.ColorPallete = colorPallete;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.RoomId);
			project.Room = room;

			_unitOfWork.ProjectRepository.Insert(project);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProjectOutDTO>(project).Id);
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
			// Add logic for calculating matches to separate class
			// Dummy logic
			MoodboardSuggestionDTO suggestions = new MoodboardSuggestionDTO();

			int[] matchesIds = new int[] {1,2,3};
			IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboardsByIdsList(matchesIds);
			IEnumerable<MoodboardOutDTO> moodboardOuts = _mapper.Map<IEnumerable<MoodboardOutDTO>>(moodboards);
			List<MoodboardMatchDTO> moodboardMatches = new List<MoodboardMatchDTO>();

			Random rand = new Random();
			foreach (MoodboardOutDTO moodboard in moodboardOuts)
			{
				MoodboardMatchDTO moodboardMatch = new MoodboardMatchDTO();
				moodboardMatch.Moodboard = moodboard;
				moodboardMatch.PercentageMatch = rand.Next(50, 100);
				moodboardMatches.Add(moodboardMatch);
			}
			suggestions.Moodboards = moodboardMatches;
			
			IEnumerable<Room> roomMatches = await _unitOfWork.RoomRepository.GetRoomsByIdsListAsync(matchesIds);
			IEnumerable<RoomOutDTO> roomOuts = _mapper.Map<IEnumerable<RoomOutDTO>>(roomMatches).ToList();

			suggestions.Rooms = roomOuts;

			return Ok(suggestions);
		}
		#endregion Public methods
	}
}
