export class User {
  email: string;
  roles: string[];
  token: string;
  phoneNumber: string;

  //TODO This is example for User model

  constructor(email: string, roles: string[], token: string, phoneNumber: string) {
    this.email = email;
    this.roles = roles;
    this.token = token;
    this.phoneNumber = phoneNumber;
  }
}
