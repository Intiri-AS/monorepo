using Intiri.API.Models.DTO.OutputDTO.Style;

namespace Intiri.API.Models.DTO.OutputDTO
{
	public class ProductOutDTO
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public double Price { get; set; }
		public string Color { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public int? MaterialId { get; set; }
		public int? PartnerId { get; set; }
		public int? ProductTypeId { get; set; }
        public string ProductLink { get; set; }
        public string PartnerName { get; set; }
    }
}
