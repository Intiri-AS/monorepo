import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info-section',
  templateUrl: './profile-info-section.component.html',
  styleUrls: ['./profile-info-section.component.scss'],
})
export class ProfileInfoSectionComponent implements OnInit {

  @Input() userInfo? = {
    firstName: '',
    lastName: '',
    gender: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: ''
  }

  @Input() partnerInfo? = {
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {}


  genderChange(event) {
    this.userInfo.gender = event.detail.value;
  }

  countryCodeChange(event) {
    this.userInfo.countryCode = event.detail.value;
    this.partnerInfo.countryCode = event.detail.value;
  }

  countryChange(event) {
    this.userInfo.country = event.detail.value;
    this.partnerInfo.countryCode = event.detail.value;
  }

  //Depending od form properties while creating reusable component, we will decide which method we will take in action

  submitForm() {
    if (!this.userInfo.gender) {
      this.sendPartnerProfile();
    } else if (this.userInfo.gender) {
      this.sendUserInfo()
    }
  }

  sendPartnerProfile() {
    console.log()
  }

  sendUserInfo() {

  }
}
