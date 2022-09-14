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
			IEnumerable<ProjectOutDTO> projectsOut = _mapper.Map<IEnumerable<ProjectOutDTO>>(projects);

			return Ok(projectsOut);
		}

		[HttpPost("add")]
		public async Task<ActionResult<int>> AddProject([FromBody] ProjectInDTO projectIn)
		{
			Project project = _mapper.Map<Project>(projectIn);

			IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(projectIn.StyleImageIds);
			project.StyleImages = styleImages.ToArray();

			ColorPallete colorPallete = await _unitOfWork.ColorPalleteRepository.GetColorPalleteById(projectIn.ColorPalleteId);
			project.ColorPallete = colorPallete;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(projectIn.RoomId);
			project.Room = room;

			RoomDetails roomDetails = await _unitOfWork.RoomDetailsRepository.GetRoomDetailsById(projectIn.RoomDetailsId);
			project.RoomDetails = roomDetails;

			_unitOfWork.ProjectRepository.Insert(project);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<ProjectOutDTO>(project));
			}

			return BadRequest("Probem occured while adding project");
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

		[HttpPost("add-room-details")]
		public async Task<ActionResult<int>> AddRoomDetails([FromBody] RoomDetailsInDTO roomDetailsIn)
		{
			RoomDetails roomDetails = _mapper.Map<RoomDetails>(roomDetailsIn);

			_unitOfWork.RoomDetailsRepository.Insert(roomDetails);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<RoomDetailsOutDTO>(roomDetails));
			}

			return BadRequest("Probem occured while adding project");

		}

		#endregion Public methods
	}
}
