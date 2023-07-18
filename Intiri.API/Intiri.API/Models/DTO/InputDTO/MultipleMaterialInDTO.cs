﻿using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class MultipleMaterialInDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int MaterialTypeId { get; set; }

        public List<IFormFile> ImageFile { get; set; }

        public string Description { get; set; }
        public string Provider { get; set; }
        public string Link { get; set; }
    }
}
