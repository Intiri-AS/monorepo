namespace Intiri.API.Models
{
	public class Designer : User
	{
		#region Constructors

		public Designer()
		{
			CreatedMoodboards = new HashSet<Moodboard.Moodboard>();
		}

		#endregion Constructors

		#region Properties

		public float HourlyRate { get; set; }
		public Style.Style Style { get; set; }
		public ICollection<Moodboard.Moodboard> CreatedMoodboards { get; set; }

		#endregion Properties
	}
}
