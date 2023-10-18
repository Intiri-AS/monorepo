using Intiri.API.Shared;
using Microsoft.AspNetCore.Mvc;

namespace Intiri.API.Services.Interfaces
{
    public interface ISmsVerificationService
    {
        Task<OperationResult<bool>> SendSmsVerificationCode(
            string countryCode,
            string phoneNumber,
            bool isException
        );
        bool ValidateSmsVerificationCode(
            string countryCode,
            string phoneNumber,
            string verificationCode
        );
    }
}
