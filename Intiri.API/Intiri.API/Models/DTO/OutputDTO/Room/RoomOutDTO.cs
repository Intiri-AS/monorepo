using Intiri.API.Models.Room;

namespace Intiri.API.Models.DTO.OutputDTO.Room
{
    public class RoomOutDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string NameNorwegian { get; set; }

        public string IconPath { get; set; }

        public string Description { get; set; }

        public int RoomTypeId { get; set; }
        public string RoomTypeName { get; set; }
    }
}
