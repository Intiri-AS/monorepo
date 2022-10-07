import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-header-internal-designer',
  templateUrl: './header-internal-designer.component.html',
  styleUrls: ['./header-internal-designer.component.scss'],
})

export class HeaderInternalDesignerComponents {

  menuItems = [
    {title: 'Client', url: '/client-list'},
    {title: 'Style', url: '/style-list'},
    {title: 'Moodboard', url: '/my-moodboard'},
  ]

  constructor(
    private router: Router,
    public popoverController: PopoverController
  ) {}

  isActiveRoute(route): boolean {
    return this.router.url === route;
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'designer'},
      event: e,
      dismissOnSelect: true
    });

    await popover.present();
  }

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden'
    x['style'].height = '100vh'
  }
  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto'
  }
}
