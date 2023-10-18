namespace Intiri.API.Models.Rating
{
    public class DesignerRating
    {
        public int Id { get; set; }
        public int OneStar { get; set; } = 0;
        public int TwoStar { get; set; } = 0;
        public int ThreeStar { get; set; } = 0;
        public int FourStar { get; set; } = 0;
        public int FiveStar { get; set; } = 0;
        public double AverageRating { get; set; } = 0f;
        public int DesignerId { get; set; }
        public Designer Designer { get; set; }
    }
}
