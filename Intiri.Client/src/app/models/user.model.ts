export class User {
  phoneNumber: string;
  role: string;
  token: string;

  //TODO This is example for User model

  constructor(phoneNumber: string, role: string, token: string) {
    this.phoneNumber = phoneNumber;
    this.role = role;
    this.token = token;
  }
}
