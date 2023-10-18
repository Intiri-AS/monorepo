using Messenger.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messenger.MessageHandlers
{
    public class EmailMessageHandler : IMessageHandler
    {
        #region Fields



        #endregion Fields

        #region ctors

        public EmailMessageHandler()
        {
            MessageType = typeof(EmalMessage);
        }

        #endregion ctors

        #region Properties

        /// <summary>
        /// Type of message to be handled
        /// </summary>
        public Type MessageType { get; private set; }

        #endregion Properties

        #region Public methods

        /// <summary>
        /// Sends provided message
        /// </summary>
        /// <param name="message">Message</param>
        /// <returns>True if successful, otherwise false</returns>
        public async Task<bool> SendMesssage(Message message)
        {
            ArgumentNullException.ThrowIfNull(message, nameof(message));

            return await Task.FromResult(true);
        }

        #endregion Public methods
    }
}
