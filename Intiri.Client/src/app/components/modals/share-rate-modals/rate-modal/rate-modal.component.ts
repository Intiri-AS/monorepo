import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RateSuccessfulModalComponent } from '../rate-successful-modal/rate-successful-modal.component';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss'],
})

export class RateModalComponent {

  star = 0;
  rateDisabled = true;

  constructor(
    private modalController: ModalController
  ) {}

  async rate() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: RateSuccessfulModalComponent,
      cssClass: 'auto-size-modal-css'
    });

    await modal.present();
  }

  dismiss() {
    this.modalController.dismiss()
  }

  addRate(num) {
    this.star = num;
    this.rateDisabled = false;
  }
}
