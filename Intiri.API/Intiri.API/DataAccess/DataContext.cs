using Intiri.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.DataAccess
{
	public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole,
								IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
	{
		#region ctors

		public DataContext(DbContextOptions options) : base(options)
		{

		}

		#endregion ctors
	}
}
