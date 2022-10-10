
export class RegisterInDTO {
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;

    constructor(
        firstName: string,
        lastName: string,
        countryCode: string,
        phoneNumber: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryCode = countryCode;
        this.phoneNumber = phoneNumber;
    }
}