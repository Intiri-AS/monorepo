using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;

namespace Intiri.API.Services;

public class TestSmsVerificationService : ISmsVerificationService
{
    public Task<OperationResult<bool>> SendSmsVerificationCode(string phoneNumber)
    {
        return Task.FromResult(new OperationResult<bool>
        {
            Result = true,
            IsSuccess = true,
            ErrorMessage = null
        });
    }

    public bool ValidateSmsVerificationCode(string phoneNumber, string verificationCode)
    {
        return verificationCode == "000000";
    }
}
