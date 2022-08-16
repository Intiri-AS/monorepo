using Intiri.API.Models.Errors;
using System.Net;
using System.Text.Json;

namespace Intiri.API.Middleware
{
	public class GlobalExceptionHandlerMiddleware
	{
		#region Fields

		protected readonly RequestDelegate _next;
		private readonly IHostEnvironment _env;

		#endregion Fields

		#region ctors

		public GlobalExceptionHandlerMiddleware(RequestDelegate next, IHostEnvironment env)
		{
			_next = next;
			_env = env;
		}

		#endregion ctors

		#region Public methods

		public async Task InvokeAsync(HttpContext context)
		{
			try
			{
				await _next(context);
			}
			catch (Exception ex)
			{
				context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
				context.Response.ContentType = "application/json";

				APIException response = _env.IsDevelopment()
					? new APIException()
					{
						StatusCode = (int)HttpStatusCode.InternalServerError,
						Message = ex.Message,
						Details = ex.StackTrace?.ToString()
					}
					: new APIException()
					{
						StatusCode = (int)HttpStatusCode.InternalServerError,
						Message = "Internal Server Error"
					};

				JsonSerializerOptions jsonOptions = new JsonSerializerOptions()
				{
					PropertyNamingPolicy = JsonNamingPolicy.CamelCase
				};

				string jsonResponse = JsonSerializer.Serialize(response, jsonOptions);

				await context.Response.WriteAsync(jsonResponse);
			}
		}

		#endregion Public methods
	}
}
