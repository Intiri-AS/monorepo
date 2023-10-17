export class SmsVerificationDTO {
  countryCode: string;
  phoneNumber: string;
  verificationCode: string;
  firstName?: string;
  lastName?: string;

  constructor(
    countryCode: string,
    phoneNumber: string,
    verificationCode: string
  ) {
    this.countryCode = countryCode;
    this.phoneNumber = phoneNumber;
    this.verificationCode = verificationCode;
  }
}
