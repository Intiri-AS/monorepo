import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rate-successful-modal',
  templateUrl: './rate-successful-modal.component.html',
  styleUrls: ['./rate-successful-modal.component.scss'],
})

export class RateSuccessfulModalComponent {

  designerFullname: string;

  constructor(
    private modalController: ModalController
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
