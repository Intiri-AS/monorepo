using AutoMapper;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper;

public class MessageMapperProfiles : Profile
{
	public MessageMapperProfiles()
	{
		CreateMap<ChatMessage, ChatMessageOutDTO>();
	}
}
