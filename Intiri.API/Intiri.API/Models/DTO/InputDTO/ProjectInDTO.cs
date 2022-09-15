﻿using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
	public class ProjectInDTO
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public ICollection<int> StyleImageIds { get; set; }

		[Required]
		public int ColorPalleteId { get; set; }

		[Required]
		public int RoomId { get; set; }

		[Required]
		public int BudgetId { get; set; }

		
		public int MoodboardId { get; set; }
	}
}
