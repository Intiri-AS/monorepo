using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.Room;

namespace Intiri.API.Automapper
{
    public class RoomDetailsMapperProfile : Profile
    {
        public RoomDetailsMapperProfile()
        {
            CreateMap<RoomDetailsInDTO, RoomDetails>();
            CreateMap<RoomDetails, RoomDetailsOutDTO>();
        }
    }
}
