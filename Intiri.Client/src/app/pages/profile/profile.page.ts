import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  apiUrl = environment.apiUrl;

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
    photoPath: ''
  }

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(this.apiUrl + 'users/profile').toPromise().then((res: any) => {
      console.log(res);
      this.userInfo = res;
      if (!res.photoPath) {
        this.userInfo.photoPath = '../../../assets/images/landing-img.png'
      }
    })
  }

  saveChanges() {
    console.log(this.userInfo);
    const userInfoModel = {
      firstName: this.userInfo.firstName || "",
      lastName: this.userInfo.lastName || "",
      gender: this.userInfo.gender || "",
      email: this.userInfo.email || "",
      phoneNumber: this.userInfo.phoneNumber || "",
      street: this.userInfo.street || "",
      postalCode: this.userInfo.postalCode || "",
      city: this.userInfo.city || "",
      country: this.userInfo.country || "",
      countryCode: this.userInfo.countryCode || ""
    }
    this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
      console.log(res)
    })
  }
}
