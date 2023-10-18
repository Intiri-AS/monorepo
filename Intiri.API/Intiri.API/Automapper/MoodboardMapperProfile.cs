using AutoMapper;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Moodboard;

namespace Intiri.API.Automapper
{
    public class MoodboardMapperProfile : Profile
    {
        public MoodboardMapperProfile()
        {
            CreateMap<MoodboardInDTO, Moodboard>();
            CreateMap<Moodboard, MoodboardOutDTO>();

            CreateMap<Moodboard, MoodboardOutDTO>();

            CreateMap<MoodboardInDTO, ClientMoodboard>();
            CreateMap<ClientMoodboard, MoodboardOutDTO>();
        }
    }
}
