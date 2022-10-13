import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent {


  menuItems = [
    {title: 'Dashboard', url: '/dashboard'},
    {title: 'Consultations', url: '/consultations'},
    {title: 'Partners', url: '/partners'},
    {title: 'Designers', url: '/designers'},
    {title: 'Clients', url: '/clients'},
    {title: 'Moodboards', url: '/moodboards'},
    {title: 'Style', url: '/style'},
  ]

  loggedUser$ = this.accountService.currentUser$;

  constructor(private router: Router, private accountService: AccountService, private popoverController: PopoverController) {}

  isActiveRoute(route): boolean {
    return this.router.url.split('?')[0] === route;
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

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: SettingsPopoverComponent,
      componentProps: { headerType: 'admin'},
      event: e,
      dismissOnSelect: true
    });

    await popover.present();
  }

}
