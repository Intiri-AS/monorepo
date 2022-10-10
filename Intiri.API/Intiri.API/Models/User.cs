using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
	public class User : IdentityUser<int>
	{
		public User() :base()
		{
			Roles = new HashSet<UserRole>();
		}

		#region Properties

		public string FirstName { get; set; }
		public string LastName { get; set; }
		public DateTime Created { get; set; } = DateTime.UtcNow;
		public string Gender { get; set; }
		public string PhotoPath { get; set; }
		public string PublicId { get; set; }
		public string Street { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string Country { get; set; }
		public string CountryCode { get; set; }
		public virtual ICollection<UserRole> Roles { get; set; }

		#endregion Properties
	}
}
