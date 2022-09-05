import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/components/modals/login/login-modal.component';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage {

  isScrolledDown: boolean;

  constructor(
    private modalController: ModalController
  ) {}

  @ViewChild(IonContent) content: IonContent;

  async openLogin() {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'modal-css'
    });

    await modal.present();
  }

  async logScrollEnd() {
    const scrollElement = await this.content.getScrollElement(); // get scroll element
    this.isScrolledDown = scrollElement.scrollTop > 50;

  }
}
