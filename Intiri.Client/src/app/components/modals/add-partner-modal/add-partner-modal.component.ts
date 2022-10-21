import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-add-partner-modal',
  templateUrl: './add-partner-modal.component.html',
  styleUrls: ['./add-partner-modal.component.scss'],
})
export class AddPartnerModalComponent implements OnInit {

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
    countryCode: '',
    logoFile: null
  }

  partnerContact = {
    firstName: '',
    lastName: '',
    countryCode: '+381',
    phoneNumber: '',
    partnerId: 0
  }

  imagePath = null;

  constructor(private modalController: ModalController, private partnerService: PartnerService, private sanitizer: DomSanitizer) { }

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
    this.partnerService.addPartner(this.partner).subscribe(res => {
      if (typeof (res) === 'object') {
        this.partnerService.getPartners();
        this.openSuccessModal();
      }
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
    this.partnerContact.partnerId = this.partnerId;
    this.partnerService.addPartnerContact(this.partnerContact).subscribe(res => {
      if (typeof (res) === 'object') {
        this.openSuccessModalContact();
      }
    });
  }

}
