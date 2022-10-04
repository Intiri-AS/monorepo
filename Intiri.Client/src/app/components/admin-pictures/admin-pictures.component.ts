import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddPictureModalComponent } from '../modals/add-picture-modal/add-picture-modal.component';

@Component({
  selector: 'app-admin-pictures',
  templateUrl: './admin-pictures.component.html',
  styleUrls: ['./admin-pictures.component.scss'],
})
export class AdminPicturesComponent implements OnInit {

  constructor(public popoverController: PopoverController, private modalController: ModalController) { }

  ngOnInit() {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {material: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addPicture() {
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
