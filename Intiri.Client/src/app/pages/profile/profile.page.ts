import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage {

  userInfo = {
    firstName: '',
    lastName: '',
    gender: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    image: '../../../assets/images/landing-img.png'
  }

  constructor() {}

  saveChanges() {
    console.log(this.userInfo);
  }
}
