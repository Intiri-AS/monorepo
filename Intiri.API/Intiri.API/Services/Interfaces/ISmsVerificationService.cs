using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Services.Interfaces
{
	public interface ISmsVerificationService
	{
		Task<bool> SendSmsVerificationCode(string phoneNumber);
		bool ValidateSmsVerificationCode(string phoneNumber, string verificationCode);
	}
}
