﻿using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class DesignerInDTO : RegisterInDTO
    {
        [Required]
		public string Language { get; set; }
		[Required]
		public string Role { get; set; }
    }
}
