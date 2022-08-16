using Intiri.API.DataAccess;
using Intiri.API.DataAccess.Repository;
using Intiri.API.DataAccess.Repository.Interface;
using Microsoft.EntityFrameworkCore;

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

			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddScoped<IRoleRepository, RoleRepository>();

			return services;
		}
	}
}
