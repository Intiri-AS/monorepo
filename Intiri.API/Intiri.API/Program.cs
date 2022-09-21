
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
using System.Text.Json.Serialization;

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

	logger.Info("Init Services..");
	// Add services to the container
	builder.Services.AddApplicationServices(configuration);
	builder.Services.AddIdentityServices(configuration);
	builder.Services.AddControllers();
	// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen();

	logger.Info("Build app..");
	var app = builder.Build();

	#region Seed data

	using IServiceScope _scope = app.Services.CreateScope();
	IServiceProvider _serviceProvider = _scope.ServiceProvider;
	DataContext dataContext = _serviceProvider.GetRequiredService<DataContext>();

	IUnitOfWork unitOfWork = _serviceProvider.GetRequiredService<IUnitOfWork>();
	UserManager<User> userManager = _serviceProvider.GetRequiredService<UserManager<User>>();
	RoleManager<Role> roleManager = _serviceProvider.GetRequiredService<RoleManager<Role>>();

	logger.Info("Migrate db..");
	//add migrations
	await dataContext.Database.MigrateAsync();
	// seed data
	//await SeedData.SeedTestData(unitOfWork, userManager, roleManager);



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
	app.UseRouting();

	//app.UseStaticFiles();
	//app.UseStaticFiles(new StaticFileOptions()
	//{
	//	FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
	//	RequestPath = new PathString("/Resources")
	//});
	
	// seed data
	await SeedData.SeedTestData(unitOfWork, userManager, roleManager);

	app.UseAuthentication();
	app.UseAuthorization();

	app.UseDefaultFiles();
	app.UseStaticFiles();

	app.UseEndpoints(endpoints =>
	{
		endpoints.MapControllers();
		endpoints.MapFallbackToController("Index", "Fallback");
	});

	logger.Debug("Running app...");
	await app.RunAsync();
}
catch (Exception exception)
{
	logger.Error(exception.Message);
	logger.Error("Stopped program: ", exception);
}

