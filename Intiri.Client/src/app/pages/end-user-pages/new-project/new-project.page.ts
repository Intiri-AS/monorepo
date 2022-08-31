import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/components/modals/login/login-modal.component';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})

export class NewProjectPage {

  constructor(
    private modalController: ModalController
  ) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'login-modal-css'
    });

    await modal.present();
  }
}
