import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  styleUrls: ['./settings-popover.component.scss'],
})
export class SettingsPopoverComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async openLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'small-modal-css'
    });

    await modal.present();
  }

}
