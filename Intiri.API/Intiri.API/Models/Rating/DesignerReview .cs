namespace Intiri.API.Models.Rating
{
    public class DesignerReview
    {
        public int Id { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
        public DateTime RatingDate { get; set; } = DateTime.UtcNow;
        public int DesignerId { get; set; }
        public Designer Designer { get; set; }
        public EndUser EndUser { get; set; }
    }
}
