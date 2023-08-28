namespace Intiri.API.Models
{
    public class DesignerPortfolio
    {
        public int Id { get; set; }
        public int DesignerId { get; set; }
        public string ImagePath { get; set; }
        public string PublicId { get; set; }
    }
}
