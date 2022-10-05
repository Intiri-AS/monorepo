import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color-modal',
  templateUrl: './add-color-modal.component.html',
  styleUrls: ['./add-color-modal.component.scss'],
})
export class AddColorModalComponent implements OnInit {

  add: boolean;
  added: boolean;
  delete: boolean;

  colorPallete = {
    name: '',
    number: null,
    mainColor: '',
    shadeColorLight: '',
    shadeColorMedium: '',
    shadeColorDark: ''
  }

  constructor(private modalController: ModalController, private colorService: ColorService) { }

  item: {}

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  addColor() {
    this.colorService.addColorPalette(this.colorPallete).subscribe(res => {
      if (typeof (res) === 'object') {
        this.colorService.getColorPalettes();
        this.openSuccessModal();
      }
    });
  }

  deleteColor() {
    this.colorService.deleteColorPalette(this.item['id']).subscribe(res => {
        this.colorService.getColorPalettes();
        this.modalController.dismiss();
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
}
