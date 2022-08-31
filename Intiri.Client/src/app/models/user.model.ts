export class User {
  email: string;
  role: string;
  token: string;

  //TODO This is example for User model

  constructor(email: string, role: string, token: string) {
    this.email = email;
    this.role = role;
    this.token = token;
  }
}
