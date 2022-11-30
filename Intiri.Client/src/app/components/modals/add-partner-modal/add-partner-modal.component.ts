import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-add-partner-modal',
  templateUrl: './add-partner-modal.component.html',
  styleUrls: ['./add-partner-modal.component.scss'],
})
export class AddPartnerModalComponent implements OnInit {
  public addPartnerForm: FormGroup;
  public addPartnerContactForm: FormGroup;
  public isFormSubmited = false;

  get nameErrors() {
    return this.addPartnerForm.controls.name.errors;
  }

  get codeErrors() {
    return this.addPartnerForm.controls.code.errors;
  }

  get phoneErrors() {
    return this.addPartnerForm.controls.phone.errors;
  }

  get emailErrors() {
    return this.addPartnerForm.controls.email.errors;
  }

  get streetErrors() {
    return this.addPartnerForm.controls.street.errors;
  }

  get postalErrors() {
    return this.addPartnerForm.controls.postal.errors;
  }

  get cityErrors() {
    return this.addPartnerForm.controls.city.errors;
  }

  get countryErrors() {
    return this.addPartnerForm.controls.country.errors;
  }

  get logoErrors() {
    return this.addPartnerForm.controls.logo.errors;
  }

  get contactFirstNameErrors() {
    return this.addPartnerContactForm.controls.firstName.errors;
  }

  get contactLastNameErrors() {
    return this.addPartnerContactForm.controls.lastName.errors;
  }

  get contactCodeErrors() {
    return this.addPartnerContactForm.controls.code.errors;
  }

  get contactPhoneErrors() {
    return this.addPartnerContactForm.controls.phone.errors;
  }

  added;
  addedContact;
  nextPage;
  delete;
  partnerId;

  item: {}

  partner = {
    name: '',
    phoneNumber: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    countryCode: '47',
    logoFile: null
  }

  partnerContact = {
    firstName: '',
    lastName: '',
    countryCode: '47',
    phoneNumber: '',
    partnerId: 0
  }

  imagePath = null;

  constructor(
    private modalController: ModalController,
    private partnerService: PartnerService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {
    this.addPartnerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])],
      street: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      logo: ['', [Validators.required]],
    });
    this.addPartnerContactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])]
    });
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  dismissContactModal() {
    this.modalController.dismiss();
    location.reload();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.partner.logoFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.partner.logoFile));
    } else {
      this.imagePath = null;
    }
  }

  addPartner() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addPartnerForm.valid) {
      this.spinner.hide();
      return;
    }
    this.partnerService.addPartner(this.partner).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.partnerService.getPartners();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });
    await modal.present();
  }

  async openSuccessModalContact() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {addedContact: true},
      cssClass: 'added-designer-modal-css'
    });
    await modal.present();
  }

  addPartnerContact() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addPartnerContactForm.valid) {
      this.spinner.hide();
      return;
    }
    this.partnerContact.partnerId = this.partnerId;
    this.partnerService.addPartnerContact(this.partnerContact).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.openSuccessModalContact();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  deletePartner() {
    this.partnerService.deletePartner(this.item['id']).subscribe(res => {
      this.partnerService.getPartners();
      this.modalController.dismiss();
      this.notifier.show({
        message: 'Partner deleted successfully',
        type: 'success',
      });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    })
  }

}
