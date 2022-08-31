import { Component, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/components/modals/login/login-modal.component';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})

export class NewProjectPage {

  isScrolledDown: boolean;

  constructor(
    private modalController: ModalController
  ) {}

  @ViewChild(IonContent) content: IonContent;

  async openModal() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'login-modal-css'
    });

    await modal.present();
  }

}
