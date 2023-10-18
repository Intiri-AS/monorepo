using Intiri.API.Models.DTO.OutputDTO.Room;

namespace Intiri.API.Models.DTO.OutputDTO.Material
{
    public class MaterialTypeMaterialsOutDTO : MaterialTypeOutDTO
    {
        public ICollection<RoomOutDTO> Materials { get; set; }
    }
}
