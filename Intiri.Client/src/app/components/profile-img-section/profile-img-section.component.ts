import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-img-section',
  templateUrl: './profile-img-section.component.html',
  styleUrls: ['./profile-img-section.component.scss'],
})
export class ProfileImgSectionComponent implements OnInit {

  @Input() image = null;
  @Input() firstName = null;
  @Input() lastName = null;
  @Input() partnerProfilePhoto = false;

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private accountService: AccountService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
   }

  openFile() {
    document.querySelector('input').click();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.spinner.show();
      const formData = new FormData();
      formData.append('photoPath', event.target.files[0]);
      if(this.partnerProfilePhoto === true) {
        this.addPhotoForPartnerProfile(formData);
      } else {
        this.addPhotoForUsers(formData);
      }
    } else {
      this.image = null;
    }
  }

  addPhotoForUsers(formData: FormData) {
    this.http.post(this.apiUrl + 'users/addPhoto', formData).subscribe((res: any) => {
      this.spinner.hide();
      if (res.photoPath) {
        this.image = res.photoPath;
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
          this.accountService.setCurrentUser({...user, photoPath: res.photoPath});
        });
        this.notifier.show({
          message: this.translate.instant('NOTIFY.profile-image-updated'),
          type: 'success',
        });
      }
    });
  }

  addPhotoForPartnerProfile(formData: FormData) {
    this.http.post(this.apiUrl + 'partner/addLogo', formData).subscribe((res: any) => {
      this.spinner.hide();
      if (res.logoPath) {
        this.image = res.logoPath;
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
          this.accountService.setCurrentUser({...user, photoPath: res.logoPath});
        });
        this.notifier.show({
          message: this.translate.instant('NOTIFY.profile-image-updated'),
          type: 'success',
        });
      }
    });
  }

}
