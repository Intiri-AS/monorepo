namespace Intiri.API.Models.DTO.Import
{
    public class MaterialImport
    {
        public string Name { get; set; }
        public double Discription { get; set; }
        public string Type { get; set; }
        public string Link_Image { get; set; }
        public string Link_Supplier { get; set; }
        public string articlenumber { get; set; }
        public string PreImageName { get; set; }
    }

    public class ProductsImport
    {
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Link_Image { get; set; }
        public string Link_Supplier { get; set; }
        public string PreImageName { get; set; }
    }
}
