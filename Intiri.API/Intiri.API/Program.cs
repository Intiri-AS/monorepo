
using Intiri.API.DataAccess;
using Intiri.API.DataAccess.SeedData;
using Intiri.API.Extension;
using Intiri.API.Middleware;
using Intiri.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using NLog;
using NLog.Web;

var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Info("Init Main");

try
{
	var builder = WebApplication.CreateBuilder(args);
	ConfigurationManager configuration = builder.Configuration;

	// NLog: Setup NLog for Dependency injection
	builder.Logging.ClearProviders();
	builder.Logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
	builder.Host.UseNLog();

	// Add services to the container
	builder.Services.AddApplicationServices(configuration);
	builder.Services.AddIdentityServices(configuration);
	builder.Services.AddControllers();
	// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen();

	var app = builder.Build();

	#region Seed data

using IServiceScope _scope = app.Services.CreateScope();
IServiceProvider _serviceProvider = _scope.ServiceProvider;
DataContext dataContext = _serviceProvider.GetRequiredService<DataContext>();

UserManager<User> userManager = _serviceProvider.GetRequiredService<UserManager<User>>();
RoleManager<Role> roleManager = _serviceProvider.GetRequiredService<RoleManager<Role>>();

//add migrations
await dataContext.Database.MigrateAsync();
// seed data
await SeedData.SeedUsers(userManager, roleManager);



#endregion Seed data

// Configure the HTTP request pipeline.
	if (app.Environment.IsDevelopment())
	{
		app.UseSwagger();
		app.UseSwaggerUI();

		app.UseCors(policy =>
						policy.AllowAnyHeader()
							   .AllowAnyMethod()
							   .AllowCredentials()
							   .WithOrigins("http://localhost:8100"));
	}

	app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

	app.UseHttpsRedirection();

	app.UseStaticFiles();
	app.UseStaticFiles(new StaticFileOptions()
	{
		FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
		RequestPath = new PathString("/Resources")
	});

	app.UseAuthentication();
	app.UseAuthorization();

	app.MapControllers();

	await app.RunAsync();
}
catch (Exception exception)
{
	logger.Error("Stopped program: ", exception);
}

