using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models
{
    [Table("Inspirations")]
    public class Inspiration
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public EndUser EndUser { get; set; }
        public int EndUserId { get; set; }
    }
}
