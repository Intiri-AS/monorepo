export class SmsVerificationDTO {
    phoneNumber: string;
    verificationCode: string;

    constructor(phoneNumber: string, verificationCode: string) {
        this.phoneNumber = phoneNumber;
        this.verificationCode = verificationCode;
    }
}