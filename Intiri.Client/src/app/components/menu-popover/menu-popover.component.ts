import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStyleModalComponent } from '../modals/add-style-modal/add-style-modal.component';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent implements OnInit {

  item: object

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async openDeleteStyleModal() {
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {delete: true, item: this.item},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
