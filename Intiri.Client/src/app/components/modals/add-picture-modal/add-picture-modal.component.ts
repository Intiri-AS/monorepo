import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-picture-modal',
  templateUrl: './add-picture-modal.component.html',
  styleUrls: ['./add-picture-modal.component.scss'],
})
export class AddPictureModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async addedPicture() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
