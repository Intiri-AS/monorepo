import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-designer-modal',
  templateUrl: './book-designer-modal.component.html',
  styleUrls: ['./book-designer-modal.component.scss'],
})

export class BookDesignerModalComponent {

  price = 950;
  totalPrice = 0;
  items = [
    {
      id: 1, name: 'Room sketch'
    },
    {
      id: 2, name: 'Color advice'
    },
    {
      id: 3, name: 'Moodboard adjustments'
    },
    {
      id: 4, name: '2D & 3D drawings'
    },
    {
      id: 5, name: 'Select products'
    },
    {
      id: 6, name: 'Lining plan'
    },
    {
      id: 7, name: 'Decoration'
    },
    {
      id: 8, name: 'Other questions'
    }
  ];

  constructor(
    private modalController: ModalController,
    private nav: NavController
  ) {}

  totalPriceSum(event) {
    const numberOfConsultations = event.detail.value;
    const reg = new RegExp(/^[1-9]\d*$/g);
    if(reg.test(numberOfConsultations)) {
      this.totalPrice = this.price * numberOfConsultations;
    } else {
      this.totalPrice = 0;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  redirectToDesigner() {
    this.modalController.dismiss();
    this.nav.navigateRoot('/designer-profile');
  }
}
