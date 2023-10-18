namespace Intiri.API.Models.DTO.OutputDTO.Room
{
    public class RoomTypeRoomsOutDTO : RoomTypeOutDTO
    {
        public ICollection<RoomOutDTO> Rooms { get; set; }
    }
}
