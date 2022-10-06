using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Services.Interfaces
{
	public interface ISmsVerificationService
	{
		Task<ActionResult<bool>> SendSmsVerificationCode(string phoneNumber);
		bool ValidateSmsVerificationCode(string phoneNumber, string verificationCode);
	}
}
