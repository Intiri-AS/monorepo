export class User {
  id: number;
  fullName: string;
  roles: string[];
  token: string;
  phoneNumber: string;
  photoPath: string;

  //TODO This is example for User model

  constructor() {
    this.id = null;
    this.fullName = '';
    this.roles = [];
    this.token = '';
    this.phoneNumber = '';
    this.photoPath = '';
  }
}
