using Intiri.API.DataAccess.Repository.Interface;
using Intiri.API.Models.ChatMessage;

namespace Intiri.API.DataAccess.Repository
{
    public class ChatMessageRepository : RepositoryBase<ChatMessage>, IChatMessageRepository
    {
        public ChatMessageRepository(DataContext context)
            : base(context) { }
    }
}
