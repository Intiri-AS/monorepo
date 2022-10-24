import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partner-profile-page',
  templateUrl: './partner-profile.page.html',
  styleUrls: ['./partner-profile.page.scss'],
})

export class PartnerProfilePage implements OnInit {

  apiUrl = environment.apiUrl;

  partnerProfile = {
    firstName: '',
    lastName: '',
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
      this.partnerProfile = res;
      if (!res.photoPath) {
        this.partnerProfile.photoPath = '../../../assets/images/profile-img.png'
      }
    })
  }

  saveChanges() {
    const userInfoModel = {
      firstName: this.partnerProfile.firstName || "",
      lastName: this.partnerProfile.lastName || "",
      email: this.partnerProfile.email || "",
      phoneNumber: this.partnerProfile.phoneNumber || "",
      street: this.partnerProfile.street || "",
      postalCode: this.partnerProfile.postalCode || "",
      city: this.partnerProfile.city || "",
      country: this.partnerProfile.country || "",
      countryCode: this.partnerProfile.countryCode || ""
    }
    this.spinner.show();
    this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
      this.spinner.hide();
    })
  }
}
