import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() firstName? = null;
  @Input() lastName? = null;
  @Input() partnerProfilePhoto? = false;

  @Output() newPhotoEvent = new EventEmitter();

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private accountService: AccountService,
    private notifier: NotifierService,
  ) {}

  ngOnInit() {}

  openFile() {
    document.querySelector('input').click();
  }

  onFileChange(event) {
    if (event.target.files[0]) {
      this.spinner.show();
      const formData = new FormData();
      formData.append('photoPath', event.target.files[0]);
      if (this.partnerProfilePhoto === true) {
        //Explanation in line 89
        this.parsePhotoToPartnerProfile(event);
      } else {
        this.addPhotoForUsers(formData);
      }
    } else {
      this.image = null;
    }
  }

  addPhotoForUsers(formData: FormData) {
    this.http
      .post(this.apiUrl + 'users/addPhoto', formData)
      .subscribe((res: any) => {
        this.spinner.hide();
        if (res.photoPath) {
          this.image = res.photoPath;
          this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
            this.accountService.setCurrentUser({
              ...user,
              photoPath: res.photoPath,
            });
          });
          this.notifier.show({
            message: 'Profile image updated successfully',
            type: 'success',
          });
        }
      });
  }

  //Needs to be deleted in future, not sure if this deletion will cause any bug
  addPhotoForPartnerProfile(formData: FormData) {
    this.http
      .post(this.apiUrl + 'partner/addLogo', formData)
      .subscribe((res: any) => {
        this.spinner.hide();
        if (res.logoPath) {
          this.image = res.logoPath;
          this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
            this.accountService.setCurrentUser({
              ...user,
              photoPath: res.logoPath,
            });
          });
          this.notifier.show({
            message: 'Profile image updated successfully',
            type: 'success',
          });
        }
      });
  }

  //New logic in updating partner profile, we now need to pass FormData instead clear Object,
  //so we implemented output to parse data to partner-profile.ts
  parsePhotoToPartnerProfile(value: any) {
    if (value.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(value.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.spinner.hide();
      };
    }
    this.newPhotoEvent.emit(value.target.files[0]);
  }
}
