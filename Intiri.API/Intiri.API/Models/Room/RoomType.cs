﻿namespace Intiri.API.Models.Room
{
	public class RoomType
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public ICollection<Room> Rooms { get; set; }
	}
}
