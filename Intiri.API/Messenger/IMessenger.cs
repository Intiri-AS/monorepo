using Messenger.MessageHandlers;
using Messenger.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messenger
{
    public interface IMessenger
    {
        /// <summary>
        /// Initializes default message handlers
        /// </summary>
        void DefaultInitialize();

        /// <summary>
        /// Adds new messsage handler
        /// </summary>
        /// <param name="messageHandler">Message handler</param>
        void AddHandler(IMessageHandler messageHandler);

        /// <summary>
        /// Handles and sends message
        /// </summary>
        /// <param name="message">Message</param>
        /// <returns>True if successful, otherwise false</returns>
        Task<bool> SendMessage(Message message);
    }
}
