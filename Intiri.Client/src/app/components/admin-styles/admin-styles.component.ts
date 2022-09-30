import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddStyleModalComponent } from '../modals/add-style-modal/add-style-modal.component';

@Component({
  selector: 'app-admin-styles',
  templateUrl: './admin-styles.component.html',
  styleUrls: ['./admin-styles.component.scss'],
})
export class AdminStylesComponent implements OnInit {

  constructor(public popoverController: PopoverController, private modalController: ModalController) { }

  ngOnInit() {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {style: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addStyle() {
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
