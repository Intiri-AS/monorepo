namespace Intiri.API.Models.Room
{
    public class RoomType
    {
        public RoomType()
        {
            Rooms = new HashSet<Room>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Room> Rooms { get; set; }
    }
}
