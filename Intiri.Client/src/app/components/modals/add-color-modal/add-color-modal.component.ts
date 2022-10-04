import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-color-modal',
  templateUrl: './add-color-modal.component.html',
  styleUrls: ['./add-color-modal.component.scss'],
})
export class AddColorModalComponent implements OnInit {

  colorPallete = {
    name: '',
    number: null,
    mainColor: '',
    shadeColorLight: '',
    shadeColorMedium: '',
    shadeColorDark: ''
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  async addedColor() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
}
