using System.ComponentModel.DataAnnotations;

namespace Intiri.API.Models.DTO.InputDTO
{
    public class MultipleProductInDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int ProductTypeId { get; set; }

        public int MaterialId { get; set; }

        public string Color { get; set; }

        public double? Price { get; set; } = 0;

        public List<IFormFile> ImageFile { get; set; }

        public string Description { get; set; }

        public string ProductLink { get; set; }

        public string PartnerName { get; set; }
    }
}
