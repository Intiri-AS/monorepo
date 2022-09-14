using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class MoodboardMapperProfile: Profile
	{
		public MoodboardMapperProfile()
		{
			CreateMap<MoodboardInDTO, Moodboard>();
			CreateMap<Moodboard, MoodboardOutDTO>();
		}
	}
}
