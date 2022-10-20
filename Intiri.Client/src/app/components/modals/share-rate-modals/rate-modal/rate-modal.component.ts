import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DesignerService } from 'src/app/services/designer.service';
import { RateSuccessfulModalComponent } from '../rate-successful-modal/rate-successful-modal.component';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss'],
})

export class RateModalComponent {

  star = 0;
  rateDisabled = true;
  designer: any;

  constructor(
    private modalController: ModalController,
    private designerService: DesignerService
  ) {}

  rate() {
    const payload = {rating: this.star, designerId: this.designer.id};
    this.designerService.rateDesigner(payload).subscribe(res => {
      this.openSuccessModal();
    })
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: RateSuccessfulModalComponent,
      componentProps: {designerFullname: `${this.designer.firstName} ${this.designer.lastName}`},
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
