import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {product: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

}
