using AutoMapper;
using Intiri.API.Controllers;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.ChatMessage;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Project;
using Intiri.API.Services.Interfaces;
using System.Net;

namespace Intiri.API.Services
{
	public class UserService : IUserService
	{
		#region Fields

		private readonly IFileUploudService _fileUploadService;
		private readonly ILogger<UserService> _logger;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public UserService(IUnitOfWork unitOfWork, IFileUploudService fileUploadService, ILogger<UserService> logger, IMapper mapper)
		{
			_fileUploadService = fileUploadService;
			_unitOfWork = unitOfWork;
			_logger = logger;
			_mapper = mapper;
		}

		#endregion Constructors

		#region IUserService members

		public async Task<List<string>> DeleteUserRelatedMessagesAsync(int userId)
		{
			List<ChatMessage> chatMessages = await _unitOfWork.UserRepository.GetUserMassegesByUserIdAsync(userId);
			List<string> attachmentsPublicIds = new();

			if (chatMessages.Count > 0)
			{
				foreach (ChatMessage message in chatMessages)
				{
					if (message.Attachments != null)
					{
						attachmentsPublicIds.AddRange(message.Attachments.Select(x => x.PublicId));
					}
					_unitOfWork.ChatMessageRepository.Delete(message);
				}
			}

			return attachmentsPublicIds;
		}

		public List<string> GetEndUserCloudinaryFilesAsync(EndUser endUser)
		{
			List<string> cloudinaryPublicIds = endUser.Inspirations.Select(x => x.PublicId).ToList();

			foreach (Project project in endUser.CreatedProjects)
			{
				cloudinaryPublicIds.AddRange(project.ProjectMoodboards.Where(rs => rs.RoomDetails != null && !string.IsNullOrEmpty(rs.RoomDetails.SketchPublicId)).
					Select(x => x.RoomDetails.SketchPublicId).ToList());
			}

			cloudinaryPublicIds.Add(endUser.PublicId);

			return cloudinaryPublicIds;
		}

		public List<string> GetPartnerCloudinaryFilesAsync(Partner partner)
		{
			List<string> cloudinaryPublicIds = partner.Products.Select(x => x.ImagePublicId).ToList();
			cloudinaryPublicIds.Add(partner.LogoPublicId);

			return cloudinaryPublicIds;
		}

		#endregion IUserService members

		#region Private members

		public async Task CleanUserCloudinaryFilesAsync(List<string> cloudinaryFiles)
		{
			foreach (string publicId in cloudinaryFiles)
			{
				if (!string.IsNullOrEmpty(publicId))
				{
					await _fileUploadService.TryDeleteFileFromCloudinaryAsync(publicId);
				}
			}
		}

		#endregion Private members
	}
}
