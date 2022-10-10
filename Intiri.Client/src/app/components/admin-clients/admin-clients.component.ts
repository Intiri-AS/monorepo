import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss'],
})
export class AdminClientsComponent implements OnInit {

  searchText: any;
  
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {client: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

}
