using Intiri.API.Models.Payment;
using Intiri.API.Models.Room;

namespace Intiri.API.Models.DTO.OutputDTO
{
    public class ClientMoodboardOutDTO : MoodboardOutDTO
    {
        #region Properties

        public ProjectOutDTO Project { get; set; }
        public int? ProjectId { get; set; }
        public RoomDetailsOutDTO RoomDetails { get; set; }

        #endregion Properties
    }
}
