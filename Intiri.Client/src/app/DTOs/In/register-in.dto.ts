
export class RegisterInDTO {
    firstName: string;
    lastName: string;
    phoneNumberFull: string;

    constructor(
        firstName: string,
        lastName: string,
        phoneNumberFull: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumberFull = phoneNumberFull;
    }
}