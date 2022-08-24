using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
	public class User : IdentityUser<int>
	{
		#region Properties

		public DateTime Created { get; set; } = DateTime.UtcNow;
		public string Address { get; set; }
		public ICollection<UserRole> Roles { get; set; }

		#endregion Properties
	}
}
