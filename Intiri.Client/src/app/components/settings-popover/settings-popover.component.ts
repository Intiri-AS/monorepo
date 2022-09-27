import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';
import { LanguagePopoverComponent } from '../popovers/language-popover/language-popover.component';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  styleUrls: ['./settings-popover.component.scss'],
})
export class SettingsPopoverComponent implements OnInit {

  headerType;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  async openLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'small-modal-css'
    });

    await modal.present();
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverComponent,
      event: ev
    })

    await popover.present();
  }

}
