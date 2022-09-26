using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
	public class User : IdentityUser<int>
	{
		#region Properties

		public string FirstName { get; set; }
		public string LastName { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public string Gender { get; set; }
		public string StreetAddress { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string Country { get; set; }
		public ICollection<UserRole> Roles { get; set; }
		public ICollection<Project> CreatedProjects { get; set; }
		public ICollection<Moodboard> CreatedMoodboards { get; set; }

		#endregion Properties
	}
}
