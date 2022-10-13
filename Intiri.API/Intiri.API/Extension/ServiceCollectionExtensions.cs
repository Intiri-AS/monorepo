using Intiri.API.Configuration;
using Intiri.API.DataAccess;
using Intiri.API.Models;
using Intiri.API.Models.DTO;
using Intiri.API.Services;
using Intiri.API.Services.Interfaces;
using Messenger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Stripe.Checkout;
using System.Text;

namespace Intiri.API.Extension
{
	public static class ServiceCollectionExtensions
	{
		public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
		{
			services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

			services.AddDbContext<DataContext>(options =>
			{
				options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
			});

			AddConfigurationService<CloudinaryConfiguration>(services, config, "CloudinaryConfiguration");
			AddConfigurationService<VippsConfiguration>(services, config, "VippsConfiguration");
			AddConfigurationService<TwilioConfiguration>(services, config, "TwilioConfiguaration");
			AddConfigurationService<PusherConfiguration>(services, config, "PusherConfiguration");
			AddConfigurationService<StripeConfiguration>(services, config, "StripeConfiguration");
			AddConfigurationService<HostingConfiguration>(services, config, "HostingConfiguration");

			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddScoped<ITokenService, TokenService>();
			services.AddScoped<IAccountService, AccountService>();

			services.AddScoped<IVippsLoginService, VippsLoginService>();
			services.AddSingleton<ISmsSender, AuthMessageSenderService>();
			services.AddScoped<IFileUploadService, CloudinaryService>();
			services.AddScoped<IContentTypesService, ContentTypesService>();
			services.AddSingleton<ISmsVerificationService, TestSmsVerificationService>();
			services.AddSingleton<IMessenger, Messenger.Messenger>();
			services.AddScoped<IMessengerService, MessengerService>();
			services.AddScoped<IPaymentService<Session, StripePaymentDTO, HttpRequest>, StripePaymentService>();

			return services;
		}

		public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
		{
			services.AddIdentityCore<User>(opt =>
			{
				//opt.User.RequireUniqueEmail = true;
				//opt.SignIn.RequireConfirmedEmail = true;
				opt.Password.RequireNonAlphanumeric = false;
			})
				.AddRoles<Role>()
				.AddRoleManager<RoleManager<Role>>()
				.AddSignInManager<SignInManager<User>>()
				.AddRoleValidator<RoleValidator<Role>>()
				.AddEntityFrameworkStores<DataContext>()
				.AddDefaultTokenProviders();

			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options =>
				{
					options.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"])),
						ValidateIssuer = false,
						ValidateAudience = false,
					};
				});

			return services;
		}

		#region Private methods

		private static IConfiguration AddConfigurationService<T>(IServiceCollection services, IConfiguration config, string configSection)
		where T : class
		{
			IConfiguration _config = config.GetSection(configSection);
			services.Configure<T>(_config);
			return _config;
		}

		#endregion Private methods
	}
}
