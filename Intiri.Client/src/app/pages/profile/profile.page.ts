import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
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

  loggedUser$ = this.accountService.currentUser$;

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.http.get(this.apiUrl + 'users/profile').toPromise().then((res: any) => {
      this.spinner.hide();
      this.userInfo = res;
      if (!res.photoPath) {
        this.userInfo.photoPath = '../../../assets/images/landing-img.png'
      }
    })
  }

  saveChanges() {
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
    this.spinner.show();
    this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
      this.spinner.hide();
    })
  }
}
