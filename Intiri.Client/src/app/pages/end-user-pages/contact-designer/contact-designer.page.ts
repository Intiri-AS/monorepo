import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';

@Component({
  selector: 'app-contact-designer-page',
  templateUrl: './contact-designer.page.html',
  styleUrls: ['./contact-designer.page.scss'],
})

export class ContactDesignerPage {

  designers = [
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    },
  ]

  constructor(
    private modalController: ModalController
  ) {}

  async paymentModal() {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

}
