import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddColorModalComponent } from '../modals/add-color-modal/add-color-modal.component';
import { AddMaterialsModalComponent } from '../modals/add-materials-modal/add-materials-modal.component';
import { AddPictureModalComponent } from '../modals/add-picture-modal/add-picture-modal.component';
import { AddRoomModalComponent } from '../modals/add-room-modal/add-room-modal.component';
import { AddStyleModalComponent } from '../modals/add-style-modal/add-style-modal.component';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent implements OnInit {

  designer: boolean;
  product: boolean;
  moodboard: boolean;
  client: boolean;
  style: boolean;
  material: boolean;
  room: boolean;
  color: boolean;
  picture: boolean;

  item: any

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  toggleTemplateMoodboard() {
    //TODO
  }

  openDeleteMoodboardModal() {
    //TODO
  }

  async openDeleteStyleModal() {
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
  async openDeleteMaterialsModal() {
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
  async openDeleteRoomModal() {
    const modal = await this.modalController.create({
      component: AddRoomModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
  async openDeleteColorModal() {
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }
  async openDeletePictureModal() {
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
