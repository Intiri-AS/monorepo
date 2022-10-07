import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info-section',
  templateUrl: './profile-info-section.component.html',
  styleUrls: ['./profile-info-section.component.scss'],
})
export class ProfileInfoSectionComponent implements OnInit {

  @Input() userInfo = {
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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {}


  genderChange(event) {
    this.userInfo.gender = event.detail.value;
  }

  countryCodeChange(event) {
    this.userInfo.countryCode = event.detail.value;
  }

  countryChange(event) {
    this.userInfo.country = event.detail.value;
  }
}
