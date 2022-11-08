import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile-info-section',
  templateUrl: './profile-info-section.component.html',
  styleUrls: ['./profile-info-section.component.scss'],
})
export class ProfileInfoSectionComponent implements OnInit {
  @Input () userInfo  = false;
  @Input () partnerProfile  = false;
  @Input() dataInput? = {
    firstName: '' ,
    lastName: '',
    gender: '' || undefined,
    countryCode: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    description: '',
  };

  currentUser: User;

  public formGroup: FormGroup;

  constructor(
    private http: HttpClient,
    private _parentContainer: ControlContainer,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.formGroup = this._parentContainer.control as FormGroup;
    this.accountService.currentUser$.subscribe( user => this.currentUser = user);
  }


  genderChange(event) {
    this.dataInput.gender = event.detail.value;
  }

  countryCodeChange(event) {
    this.dataInput.countryCode = event.detail.value;
  }

  countryChange(event) {
    this.dataInput.country = event.detail.value;
  }

  getPartner() {
    if (this.partnerProfile) {
      return false;
    } else {
      return true;
    }
  }
}
