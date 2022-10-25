using System.ComponentModel.DataAnnotations.Schema;

namespace Intiri.API.Models
{
	[Table("Consultations")]
	public class Consultation
	{
		public int Id { get; set; }
		public int Duration { get; set; }
		public float Price { get; set; }
	}
}
	