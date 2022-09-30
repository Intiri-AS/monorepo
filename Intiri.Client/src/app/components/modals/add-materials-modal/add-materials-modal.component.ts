import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-materials-modal',
  templateUrl: './add-materials-modal.component.html',
  styleUrls: ['./add-materials-modal.component.scss'],
})
export class AddMaterialsModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async addedMaterial() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
