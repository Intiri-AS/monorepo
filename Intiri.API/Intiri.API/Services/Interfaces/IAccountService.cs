using Intiri.API.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Intiri.API.Services.Interfaces
{
	public interface IAccountService
	{
		Task<IdentityResult> CreateUserAsync(User user);

		Task<IdentityResult> CreateUserAsync(User user, string password);

		Task<IdentityResult> AddUserToRoleAsync(User user, string desiredRole);

		Task<IdentityResult> RemoveUserFromRoleAsync(User user, string desiredRole);

		Task<IdentityResult> DeleteUserAsync(User user);

		Action<User> DeleteUserAsync();

		Task<User> FindUserByIdAsync(string id);

		Task<User> GetUserByUsernameAsync(string username);

		Task<SignInResult> CheckUserSignInPaswordAsync(User user, string password, bool lockoutOnFailure);

		Task<string> GeneratePasswordResetTokenAsync(User user);

		Task<IdentityResult> UserResetPaswordAsync(User user, string token, string password);

		Task<bool> IsUserWithPhoneNumberExists(string phoneNumber);


		Task<TEntity> GetUserByIdAsync<TEntity>(int id) where TEntity : User;

		Task<TEntity> GetUserByUsernameAsync<TEntity>(string username) where TEntity : User;

		Task<IEnumerable<TEntity>> GetAllUsersAsync<TEntity>() where TEntity : class;

		Task<IList<string>> GetUserRolesByIdAsync(string userId);
		Task<IList<string>> GetUserRolesAsync(User user);
	}
}
