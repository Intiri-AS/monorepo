using Messenger.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messenger.MessageHandlers
{
	public interface IMessageHandler
	{
		/// <summary>
		/// Type of message to be handled
		/// </summary>
		Type MessageType { get; }

		/// <summary>
		/// Sends provided message
		/// </summary>
		/// <param name="message">Message</param>
		/// <returns>True if successful, otherwise false</returns>
		Task<bool> SendMesssage(Message message);
	}
}
