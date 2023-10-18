import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';
import { LanguagePopoverComponent } from '../popovers/language-popover/language-popover.component';

@Component({
  selector: 'app-settings-popover',
  templateUrl: './settings-popover.component.html',
  styleUrls: ['./settings-popover.component.scss'],
})
export class SettingsPopoverComponent implements OnInit {
  headerType;
  onSettingsItemClick;

  constructor(
    private modalController: ModalController,
    public popoverController: PopoverController,
    private nav: NavController
  ) {}

  ngOnInit() {}

  async openLogoutModal() {
    this.popoverController.dismiss();
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'small-modal-css',
    });

    await modal.present();
    this.onSettingsItemClick();
  }

  async openLanguagePopover(event) {
    // this.onSettingsItemClick();
    const popover = await this.popoverController.create({
      component: LanguagePopoverComponent,
      event,
    });

    await popover.present();
  }

  openPricingPlans() {
    this.popoverController.dismiss();
    this.nav.navigateRoot('/pricing-plans');
  }
}
