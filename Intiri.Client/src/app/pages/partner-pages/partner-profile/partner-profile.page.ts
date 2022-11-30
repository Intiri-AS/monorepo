import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
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
  partnerProfileForm!: FormGroup;

  apiUrl = environment.apiUrl;
  partners: any[];

  partnerProfile = {
    name: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    logoPath: '',
  };

  newImage;

  loggedUser$ = this.accountService.currentUser$;

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private spinner: NgxSpinnerService,
    private partnerService: PartnerService,
    private fb: FormBuilder,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.partnerProfileForm = this.fb.group({
      dataInfoGroup: this.fb.group({
        innerGroup: this.fb.group({
          name: '',
          email: '',
          phoneNumber: '',
          street: '',
          postalCode: '',
          city: '',
          country: '',
          countryCode: '',
        }),
      }),
    });
    this.partnerService.getPartnerProfile().subscribe((response) => {
      this.spinner.hide();
      this.partnerProfile = response;
      this.patchValues(this.partnerProfile);
      if (!response.logoPath) {
        this.partnerProfile.logoPath = '../../../assets/images/profile-img.png';
      }
    });
  }

  patchValues(partnerInfo: any) {
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.name')
      .patchValue(partnerInfo.name || null);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.email')
      .patchValue(partnerInfo.email);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.phoneNumber')
      .patchValue(partnerInfo.phoneNumber);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.street')
      .patchValue(partnerInfo.street);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.postalCode')
      .patchValue(partnerInfo.postalCode);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.city')
      .patchValue(partnerInfo.city);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.country')
      .patchValue(partnerInfo.country);
    this.partnerProfileForm
      .get('dataInfoGroup.innerGroup.countryCode')
      .patchValue(partnerInfo.countryCode);
  }

  saveChanges() {
    console.log(this.partnerProfile.logoPath);
    const userInfoModel =
      this.partnerProfileForm.value.dataInfoGroup.innerGroup;
    const formData = new FormData();
    Object.keys(userInfoModel).forEach((key) =>
      formData.append(key, userInfoModel[key])
    );
    formData.delete('logoFile');
    formData.append(
      'logoFile',
      this.partnerProfile.logoPath,
      `partnerImg${this.partnerProfile.name.replace(/\s/g, '_')}.png`
    );
    this.spinner.show();
    this.http
      .put(this.apiUrl + 'partner/update', formData)
      .subscribe((res: any) => {
        if (res.logoPath) {
          this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
            this.accountService.setCurrentUser({
              ...user,
              photoPath: res.logoPath,
            });
          });
        }
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('PROFILE.update-message'),
          type: 'success',
        });
      });
  }

  addNewPhoto(newItem: any) {
    this.partnerProfile.logoPath = newItem;
  }
}
