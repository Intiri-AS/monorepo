import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShareSuccessfulModalComponent } from '../share-successful-modal/share-successful-modal.component';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent {
  constructor(private modalController: ModalController) {}

  async share() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ShareSuccessfulModalComponent,
      cssClass: 'auto-size-modal-css',
    });

    await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
