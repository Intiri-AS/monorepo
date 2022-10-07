export class SmsVerificationDTO {
    phoneNumberFull: string;
    verificationCode: string;
    firstName?: string;
    lastName?: string;

    constructor(phoneNumberFull: string, verificationCode: string) {
        this.phoneNumberFull = phoneNumberFull;
        this.verificationCode = verificationCode;
    }
}