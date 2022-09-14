import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent {


  menuItems = [
    {title: 'Dashboard', url: '#'},
    {title: 'Consultations', url: '#'},
    {title: 'Vendors', url: '#'},
    {title: 'Designers', url: '#'},
    {title: 'Clients', url: '#'},
    {title: 'Moodboards', url: '#'},
    {title: 'Style', url: '#'},
  ]

  constructor(private modalController: ModalController, private router: Router) {}

  isActiveRoute(route): boolean {
    return this.router.url === route;
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

  async openLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'modal-css'
    });

    await modal.present();
  }

}
