
using Intiri.API.Extension;
using Intiri.API.Middleware;
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
	builder.Services.AddControllers();
	// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen();

	var app = builder.Build();

	// Configure the HTTP request pipeline.
	if (app.Environment.IsDevelopment())
	{
		app.UseSwagger();
		app.UseSwaggerUI();

		app.UseCors(policy =>
						policy.AllowAnyHeader()
							   .AllowAnyMethod()
							   .AllowCredentials()
							   .WithOrigins("https://localhost:4200"));
	}

	app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

	app.UseHttpsRedirection();

	app.UseAuthorization();

	app.MapControllers();

	app.Run();
}
catch (Exception exception)
{
	logger.Error("Stopped program: ", exception);
}

