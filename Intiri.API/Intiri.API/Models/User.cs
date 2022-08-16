using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Models
{
	public class User : IdentityUser<int>
	{
		#region Properties

		public ICollection<UserRole> Roles { get; set; }

		#endregion Properties
	}
}
