using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class RoomDetailsMapperProfile: Profile
	{
		public RoomDetailsMapperProfile()
		{
			CreateMap<RoomDetailsInDTO, RoomDetails>();
			CreateMap<RoomDetails, RoomDetailsOutDTO>();
		}
	}
}
