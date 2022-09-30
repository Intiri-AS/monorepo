import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddMaterialsModalComponent } from '../modals/add-materials-modal/add-materials-modal.component';

@Component({
  selector: 'app-admin-materials',
  templateUrl: './admin-materials.component.html',
  styleUrls: ['./admin-materials.component.scss'],
})
export class AdminMaterialsComponent implements OnInit {

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

  async addMaterials() {
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
