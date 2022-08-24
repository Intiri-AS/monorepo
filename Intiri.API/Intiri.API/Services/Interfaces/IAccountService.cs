using Intiri.API.Models;
using Microsoft.AspNetCore.Identity;

namespace Intiri.API.Services.Interfaces
{
	public interface IAccountService
	{
		Task<IdentityResult> CreateUserAsync(User user);

		Task<IdentityResult> CreateUserAsync(User user, string password);

		Task<IdentityResult> AddUserToRolesAsync(User user, string desiredRole);

		Task DeleteUserAsync(User user);

		Action<User> DeleteUserAsync();

		Task<User> GetUserByPhoneNumberAsync(string userPhoneNumber);

		Task<SignInResult> CheckUserSignInPaswordAsync(User user, string password, bool lockoutOnFailure);

		Task<bool> IsUserWithPhoneNumberExists(string phoneNumber);
	}
}
