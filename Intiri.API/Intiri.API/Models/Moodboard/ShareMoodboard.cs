namespace Intiri.API.Models.Moodboard
{
	public class ShareMoodboard
	{
		public EndUser SenderUser { get; set; }
		public int SenderUserId { get; set; }
		public EndUser RecipientUser { get; set; }
		public int RecipientUserId { get; set; }
		public DateTime SharedTime { get; set; } = DateTime.UtcNow;
		public Moodboard MoodboardShared { get; set; }

	}
}
