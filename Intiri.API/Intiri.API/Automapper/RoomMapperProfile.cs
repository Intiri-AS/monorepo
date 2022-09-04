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
			CreateMap<Room, RoomOutDTO>();

			CreateMap<RoomTypeInDTO, RoomType>();
			CreateMap<RoomType, RoomTypeOutDTO>();
			CreateMap<RoomType, RoomTypeRoomsOutDTO>();
		}
	}
}
