import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-designer-modal',
  templateUrl: './add-designer-modal.component.html',
  styleUrls: ['./add-designer-modal.component.scss'],
})
export class AddDesignerModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async addedDesigner() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddDesignerModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
