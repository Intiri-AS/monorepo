using AutoMapper;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO.Room;
using Intiri.API.Models.Room;

namespace Intiri.API.Automapper
{
    public class RoomMapperProfile : Profile
    {
        public RoomMapperProfile()
        {
            CreateMap<RoomInDTO, Room>();
            CreateMap<Room, RoomOutDTO>()
                .ForMember(rt => rt.RoomTypeName, opt => opt.MapFrom(src => src.RoomType.Name));

            CreateMap<RoomTypeInDTO, RoomType>();
            CreateMap<RoomType, RoomTypeOutDTO>();
            CreateMap<RoomType, RoomTypeRoomsOutDTO>();
        }
    }
}
