using Messenger.MessageHandlers;
using Messenger.Messages;

namespace Messenger
{
    public class Messenger : IMessenger
    {
        #region Fields

        private bool _initialized;
        private readonly Dictionary<Type, IMessageHandler> _handlers =
            new Dictionary<Type, IMessageHandler>();

        #endregion Fields

        #region Constructor

        public Messenger()
        {
            DefaultInitialize();
        }

        #endregion Constructor

        #region Public methods

        /// <summary>
        /// Initializes default message handlers
        /// </summary>
        public void DefaultInitialize()
        {
            if (_initialized)
            {
                return;
            }

            AddHandler(new EmailMessageHandler());
            AddHandler(new PusherMessageHandler());
            _initialized = true;
        }

        /// <summary>
        /// Adds new messsage handler
        /// </summary>
        /// <param name="messageHandler">Message handler</param>
        public void AddHandler(IMessageHandler messageHandler)
        {
            ArgumentNullException.ThrowIfNull(messageHandler, nameof(messageHandler));

            if (_handlers.TryGetValue(messageHandler.MessageType, out IMessageHandler? _))
            {
                throw new ArgumentException(
                    $"Message handler for message type {messageHandler.MessageType.FullName} already exists."
                );
            }

            _handlers[messageHandler.MessageType] = messageHandler;
        }

        /// <summary>
        /// Handles and sends message
        /// </summary>
        /// <param name="message">Message</param>
        /// <returns>True if successful, otherwise false</returns>
        public async Task<bool> SendMessage(Message message)
        {
            // TODO: create queue and handle messages asynchronously

            ArgumentNullException.ThrowIfNull(message, nameof(message));

            Type messageType = message.GetType();

            if (!_handlers.TryGetValue(messageType, out IMessageHandler? handler))
            {
                throw new ArgumentException($"Unknown message type {messageType.FullName}.");
            }

            if (handler is null)
            {
                // log error
                return false;
            }

            try
            {
                return await handler.SendMesssage(message);
            }
            catch (Exception)
            {
                // log error
                return false;
            }
        }

        #endregion Public methods
    }
}
