using Intiri.API.Models;
using Intiri.API.Services.Interfaces;
using Intiri.API.Shared;
using Microsoft.AspNetCore.Mvc;
using System.Timers;
using Twilio.Rest.Api.V2010.Account;
using Timer = System.Timers.Timer;

namespace Intiri.API.Services
{
    public class SmsVerificationService : ISmsVerificationService
    {
        private static readonly int VERIFICATION_CODE_EXPIRATION_IN_MINUTES = 5;
        private static readonly int VERIFICATION_CODE_EXPIRATION_IN_SECONDS =
            VERIFICATION_CODE_EXPIRATION_IN_MINUTES * 60;
        private readonly Timer _checker;
        private readonly List<PendingSmsVerification> _pendingSmsVerifications;
        private readonly ISmsSender _smsSender;
        private readonly ILogger<SmsVerificationService> _logger;

        public SmsVerificationService(ISmsSender smsSender, ILogger<SmsVerificationService> logger)
        {
            _smsSender = smsSender;
            _pendingSmsVerifications = new();
            _checker = new Timer()
            {
                Interval = 1000,
                Enabled = true,
                AutoReset = true
            };
            _checker.Elapsed += OnPendingVerificationsChecked;
            _logger = logger;
        }

        public async Task<OperationResult<bool>> SendSmsVerificationCode(
            string countryCode,
            string phoneNumber,
            bool isException
        )
        {
            if (isException)
            {
                OperationResult<bool> responce =
                    new()
                    {
                        Result = true,
                        IsSuccess = true,
                        ErrorMessage = ""
                    };
                return responce;
            }

            Random generator = new();

            string verificationCode = generator.Next(0, 1_000_000).ToString("D6");

            string message = GenerateVerificationMessage(verificationCode);

            MessageResource messageResource = await _smsSender.SendSmsAsync(
                countryCode,
                phoneNumber,
                message
            );

            PendingSmsVerification pendingSmsVerification =
                new()
                {
                    PhoneNumber = countryCode + phoneNumber,
                    VerificationCode = verificationCode,
                    DateCreated = messageResource.DateCreated
                };

            OperationResult<bool> sendOperation =
                new()
                {
                    Result = true,
                    IsSuccess = messageResource.ErrorMessage == null,
                    ErrorMessage = messageResource.ErrorMessage
                };

            if (sendOperation.IsSuccess)
            {
                _pendingSmsVerifications.Add(pendingSmsVerification);
            }
            return sendOperation;
        }

        public bool ValidateSmsVerificationCode(
            string countryCode,
            string phoneNumber,
            string verificationCode
        )
        {
            string _phoneNumber = countryCode + phoneNumber;
            bool isVerificationSuccessful = _pendingSmsVerifications
                .Where(v => v.PhoneNumber == _phoneNumber && v.VerificationCode == verificationCode)
                .Any();

            if (isVerificationSuccessful)
            {
                _logger.LogInformation(
                    $"SMS verification SUCCESS for phoneNumber='${_phoneNumber}' "
                        + $"and verificationCode='${verificationCode}'"
                );

                _pendingSmsVerifications.RemoveAll(v => v.PhoneNumber == _phoneNumber);
            }
            else
            {
                _logger.LogInformation(
                    $"SMS verification FAIL for phoneNumber='${_phoneNumber}' "
                        + $"and verificationCode='${verificationCode}'"
                );

                _pendingSmsVerifications.RemoveAll(
                    v => v.PhoneNumber == _phoneNumber && v.VerificationCode == verificationCode
                );
            }

            return isVerificationSuccessful;
        }

        private void OnPendingVerificationsChecked(Object source, ElapsedEventArgs e)
        {
            foreach (PendingSmsVerification verification in _pendingSmsVerifications)
            {
                bool isExpired = CheckIfVerificationCodeExpired(verification);

                if (isExpired)
                {
                    _logger.LogInformation(
                        $"SMS verification code expired "
                            + $"for phone number {verification.PhoneNumber}"
                    );

                    _pendingSmsVerifications.Remove(verification);
                }
            }
        }

        private bool CheckIfVerificationCodeExpired(PendingSmsVerification verification)
        {
            bool isExpired = false;

            if (verification.DateCreated != null)
            {
                TimeSpan? timeDiff = DateTime.Now - verification.DateCreated;

                if (!timeDiff.HasValue)
                {
                    isExpired = true;
                }
                if (timeDiff.Value.Seconds > VERIFICATION_CODE_EXPIRATION_IN_SECONDS)
                {
                    isExpired = true;
                }
            }
            return isExpired;
        }

        private string GenerateVerificationMessage(string verificationCode)
        {
            return $"Your Intiri verification code is: {verificationCode}\n"
                + $"Valid for {VERIFICATION_CODE_EXPIRATION_IN_MINUTES} minutes.";
        }
    }
}
