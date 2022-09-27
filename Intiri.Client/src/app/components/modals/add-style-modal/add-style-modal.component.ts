import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-style-modal',
  templateUrl: './add-style-modal.component.html',
  styleUrls: ['./add-style-modal.component.scss'],
})
export class AddStyleModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async addedStyle() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
