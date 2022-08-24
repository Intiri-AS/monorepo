using Intiri.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace Intiri.API.DataAccess.SeedData
{
	public class SeedData
	{
		public static async Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
		{
			if (await userManager.Users.AnyAsync())
			{
				return;
			}

			//create users
			string usersData = await File.ReadAllTextAsync("DataAccess/SeedData/UserSeedData.json");
			List<User> users = JsonSerializer.Deserialize<List<User>>(usersData);
			if (users == null) return;

			string commonPassword = "Pa$$w0rd";

			var roles = new List<Role>
			{
				new Role{Name = "EndUser"},
				new Role{Name = "Admin"},
				new Role{Name = "Designer"},
			};

			foreach (var role in roles)
			{
				await roleManager.CreateAsync(role);
			}

			foreach (User user in users)
			{
				user.UserName = user.UserName.ToLower();
				await userManager.CreateAsync(user, commonPassword);
				await userManager.AddToRoleAsync(user, "EndUser");
			}
		}
	}
}
