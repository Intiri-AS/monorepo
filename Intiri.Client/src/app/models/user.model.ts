export class User {
  email: string;
  roles: string[];
  token: string;
  phoneNumber: string;

  //TODO This is example for User model

  constructor() {
    this.email = '';
    this.roles = [];
    this.token = '';
    this.phoneNumber = '';
  }
}
