import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
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

  profileForm: FormGroup;

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
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.spinner.show();
    this.profileForm = this.fb.group({
      dataInfoGroup: this.fb.group({
        innerGroup: this.fb.group({
        firstName: "",
        lastName: "",
        gender: "",
        email:  "",
        phoneNumber: "",
        street: "",
        postalCode: "",
        city: "",
        country: "",
        countryCode: ""
      }),
    }),
  });
    this.http.get(this.apiUrl + 'users/profile').toPromise().then((res: any) => {
      this.spinner.hide();
      this.userInfo = res;
    
      this.patchValues(this.userInfo)
      if (!res.photoPath) {
        this.userInfo.photoPath = '../../../assets/images/profile-img.png'
      }
    })
  }

  patchValues(userInfo: any) {
    this.profileForm.get('dataInfoGroup.innerGroup.firstName').patchValue(userInfo.firstName);
    this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
    this.profileForm.get('dataInfoGroup.innerGroup.gender').patchValue(userInfo.gender);
    this.profileForm.get('dataInfoGroup.innerGroup.email').patchValue(userInfo.email);
    this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
    this.profileForm.get('dataInfoGroup.innerGroup.gender').patchValue(userInfo.gender);
    this.profileForm.get('dataInfoGroup.innerGroup.phoneNumber').patchValue(userInfo.phoneNumber);
    this.profileForm.get('dataInfoGroup.innerGroup.street').patchValue(userInfo.street);
    this.profileForm.get('dataInfoGroup.innerGroup.postalCode').patchValue(userInfo.postalCode);
    this.profileForm.get('dataInfoGroup.innerGroup.city').patchValue(userInfo.city);
    this.profileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(userInfo.lastName);
    this.profileForm.get('dataInfoGroup.innerGroup.country').patchValue(userInfo.country);
    this.profileForm.get('dataInfoGroup.innerGroup.countryCode').patchValue(userInfo.countryCode);
  }

  saveChanges() {
    const userInfoModel = this.profileForm.value.dataInfoGroup.innerGroup;
    this.spinner.show();
    this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Profile updated successfully',
        type: 'success',
      });
    })
  }
}
