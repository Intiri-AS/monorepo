import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';

@Component({
  selector: 'app-designer-profile-page',
  templateUrl: './designer-profile.page.html',
  styleUrls: ['./designer-profile.page.scss'],
})

export class DesignerProfilePage {

  projects = [
    {
      projectName: 'Minimal',
      moodboard: '2',
      pieces: '20',
      updated: '1 week',
      image: '../../../../assets/images/landing-img.png'
    },
    {
      projectName: 'Funky',
      moodboard: '3',
      pieces: '25',
      updated: '1 day',
      image: '../../../../assets/images/landing-img.png'
    },
  ];

  constructor(
    private modalController: ModalController,
    private nav: NavController
  ) {}

  async bookConsultationModal() {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

}
