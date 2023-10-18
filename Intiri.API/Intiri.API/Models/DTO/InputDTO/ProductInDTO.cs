using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class ProductInDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int ProductTypeId { get; set; }

        public int MaterialId { get; set; }

        public string Color { get; set; }

        public double Price { get; set; }

        public IFormFile ImageFile { get; set; }

        public string Description { get; set; }

        public string ProductLink { get; set; }
    }
}
