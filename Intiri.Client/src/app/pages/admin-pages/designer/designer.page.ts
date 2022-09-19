import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { AddDesignerModalComponent } from 'src/app/components/modals/add-designer-modal/add-designer-modal.component';

@Component({
  selector: 'app-designer-page',
  templateUrl: './designer.page.html',
  styleUrls: ['./designer.page.scss'],
})

export class DesignerPage {

  constructor( public popoverController: PopoverController, private modalController: ModalController) {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addDesigner() {
    const modal = await this.modalController.create({
      component: AddDesignerModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
