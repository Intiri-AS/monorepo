namespace Intiri.API.Models.DTO.OutputDTO.Material
{
    public class MaterialOutDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImagePath { get; set; }

        public string Description { get; set; }

        public int MaterialTypeId { get; set; }

        public string MaterialTypeName { get; set; }
        public string Provider { get; set; }
        public string Link { get; set; }
    }
}
