import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

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

  public formGroup: FormGroup;

  constructor(
    private http: HttpClient,
    private _parentContainer: ControlContainer
  ) { }

  ngOnInit() {
    this.formGroup = this._parentContainer.control as FormGroup;
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
