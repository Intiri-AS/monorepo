export class User {
  email: string;
  role: string;
  token: string;
  phoneNumber: string;

  //TODO This is example for User model

  constructor(email: string, role: string, token: string, phoneNumber: string) {
    this.email = email;
    this.role = role;
    this.token = token;
    this.phoneNumber = phoneNumber;
  }
}
