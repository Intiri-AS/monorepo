﻿using AutoMapper;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.OutputDTO;

namespace Intiri.API.Automapper
{
	public class UserMapperProfiles : Profile
	{
		public UserMapperProfiles()
		{
			CreateMap<User, UserOutDTO>();
			CreateMap<SmsVerificationInDTO, User>();
			CreateMap<UserOutDTO, User>();
			CreateMap<UserUpdateInDTO, User>();

			CreateMap<SmsVerificationInDTO, EndUser>();

			CreateMap<Designer, DesignerOutDTO>();
			CreateMap<Designer, DesignerWithReviewsOutDTO>();

		}
	}
}
