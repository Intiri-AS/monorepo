import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RateModalComponent } from '../rate-modal/rate-modal.component';

@Component({
  selector: 'app-share-successful-modal',
  templateUrl: './share-successful-modal.component.html',
  styleUrls: ['./share-successful-modal.component.scss'],
})
export class ShareSuccessfulModalComponent {
  constructor(private modalController: ModalController) {}

  async dismiss() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: RateModalComponent,
    });

    await modal.present();
  }
}
