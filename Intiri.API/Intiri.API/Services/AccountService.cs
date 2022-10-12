using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Intiri.API.Services
{
	public class AccountService : IAccountService
	{
		#region Fields

		private readonly UserManager<User> _userManager;
		private readonly SignInManager<User> _signInManager;

		#endregion Fields

		#region Constructor

		public AccountService(UserManager<User> userManager, SignInManager<User> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
		}

		#endregion Constructor

		#region IAccountService members

		public async Task<IdentityResult> CreateUserAsync(User user)
		{
			return await _userManager.CreateAsync(user);
		}

		public async Task<IdentityResult> CreateUserAsync(User user, string password)
		{
			return await _userManager.CreateAsync(user, password);
		}

		public async Task<IdentityResult> AddUserToRolesAsync(User user, string desiredRole)
		{
			return await _userManager.AddToRoleAsync(user, desiredRole); ;
		}

		public async Task<IdentityResult> DeleteUserAsync(User user)
		{
			return await _userManager.DeleteAsync(user);
		}

		public Action<User> DeleteUserAsync()
		{
			return async (user) => await DeleteUserAsync(user);
		}

		public async Task<User> FindUserByIdAsync(string id)
		{
			return await _userManager.FindByIdAsync(id);
		}

		public async Task<User> GetUserByUsernameAsync(string username)
		{
			return await _userManager.Users.SingleOrDefaultAsync(x => x.UserName == username.ToLower());
		}

		public async Task<SignInResult> CheckUserSignInPaswordAsync(User user, string password, bool lockoutOnFailure)
		{
			return await _signInManager.CheckPasswordSignInAsync(user, password, lockoutOnFailure);
		}
		public async Task<string> GeneratePasswordResetTokenAsync(User user)
		{
			return await _userManager.GeneratePasswordResetTokenAsync(user);
		}

		public async Task<IdentityResult> UserResetPaswordAsync(User user, string token, string password)
		{
			return await _userManager.ResetPasswordAsync(user, token, password);
		}

		public async Task<bool> IsUserWithPhoneNumberExists(string phoneNumber)
		{
			return await _userManager.Users.AnyAsync(x => x.UserName == phoneNumber.ToLower());
		}




		public async Task<TEntity> GetUserByIdAsync<TEntity>(int id) where TEntity : User
		{
			return await _userManager.Users.OfType<TEntity>().SingleOrDefaultAsync(x => x.Id == id);
		}

		public async Task<TEntity> GetUserByUsernameAsync<TEntity>(string username) where TEntity : User
		{
			return await _userManager.Users.OfType<TEntity>().SingleOrDefaultAsync(x => x.UserName == username);
		}

		public async Task<IEnumerable<TEntity>> GetAllUsersAsync<TEntity>() where TEntity : class
		{
			return await _userManager.Users.OfType<TEntity>().ToListAsync();
		}

		#endregion IAccountService members
	}
}
