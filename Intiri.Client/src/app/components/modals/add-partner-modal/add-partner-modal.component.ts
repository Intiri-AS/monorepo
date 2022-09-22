import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-partner-modal',
  templateUrl: './add-partner-modal.component.html',
  styleUrls: ['./add-partner-modal.component.scss'],
})
export class AddPartnerModalComponent implements OnInit {

  added;
  nextPage;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async goToNextPage() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {nextPage: true},
      cssClass: 'add-partner-contact-modal-css'
    });

    await modal.present();
  }

  async addedPartner() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
