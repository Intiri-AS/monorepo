import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private modalController: ModalController) {}

  menuOpened() {
    const x = document.querySelector('#home');
    x['style'].overflow = 'hidden'
    x['style'].height = '100vh'
  }
  menuClosed() {
    const x = document.querySelector('#home');
    x['style'].height = 'auto'
  }
  removeProjectDraft(){
    sessionStorage.removeItem('draftProjectName');
  }

  async openLogoutModal() {
    const modal = await this.modalController.create({
      component: LogoutModalComponent,
      cssClass: 'modal-css'
    });

    await modal.present();
  }

}
