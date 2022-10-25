import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { PartnerService } from 'src/app/services/partner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partner-profile-page',
  templateUrl: './partner-profile.page.html',
  styleUrls: ['./partner-profile.page.scss'],
})

export class PartnerProfilePage implements OnInit {
  partnerProfileForm: FormGroup;

  apiUrl = environment.apiUrl;
  partners$: Observable<any> = this.partnerService.partners$;
  partners: any[];

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
    private spinner: NgxSpinnerService,
    private partnerService: PartnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.partnerProfileForm = this.fb.group({
      dataInfoGroup: this.fb.group({
        innerGroup: this.fb.group({
        firstName: "",
        lastName: "",
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
    // this.http.get(this.apiUrl + 'users/profile').toPromise().then((res: any) => {
    //   this.spinner.hide();
    //   this.partnerProfile = res;
    //   console.log(this.partnerProfile,'profil')
    //   //patchValues(this.partnerProfile)
    //   if (!res.photoPath) {
    //     this.partnerProfile.photoPath = '../../../assets/images/profile-img.png'
    //   }
    // })
  }

  patchValues(partnerInfo: any) {
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.firstName').patchValue(partnerInfo.firstName);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(partnerInfo.lastName);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.gender').patchValue(partnerInfo.gender);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.email').patchValue(partnerInfo.email);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(partnerInfo.lastName);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.phoneNumber').patchValue(partnerInfo.phoneNumber);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.street').patchValue(partnerInfo.street);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.postalCode').patchValue(partnerInfo.postalCode);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.city').patchValue(partnerInfo.city);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.lastName').patchValue(partnerInfo.lastName);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.country').patchValue(partnerInfo.country);
    this.partnerProfileForm.get('dataInfoGroup.innerGroup.countryCode').patchValue(partnerInfo.countryCode);
  }

  saveChanges() {
    const userInfoModel = this.partnerProfileForm.value.dataInfoGroup.innerGroup;
    this.spinner.show();
    this.http.put(this.apiUrl + 'users/profile', userInfoModel).subscribe(res => {
      this.spinner.hide();
    })
  }
}
