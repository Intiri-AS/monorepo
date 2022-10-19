namespace Intiri.API.Models.DTO.OutputDTO.DesignerRating
{
	public class RatingWithCommentOutDTO
	{
		public int Id { get; set; }
		public int Rating { get; set; }
		public string Comment { get; set; }
		public DateTime RatingDate { get; set; }
		public string EndUserFirstName { get; set; }
		public string EndUserLastName { get; set; }
	}
}
