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
  extraPayment = false;
  extraPaymentAmount = 3500;
  numberOfConsultations = 0;
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
      id: 4, name: 'Select products'
    },
    {
      id: 5, name: 'Lining plan'
    },
    {
      id: 6, name: 'Decoration'
    },
    {
      id: 7, name: 'Other questions'
    }
  ];

  constructor(
    private modalController: ModalController,
    private nav: NavController
  ) {}

  totalPriceSum(event) {
    const numberOfConsultations = event.detail.value;
    this.numberOfConsultations = numberOfConsultations;
    const reg = new RegExp(/^[1-9]\d*$/g);
    if(reg.test(numberOfConsultations)) {
      if (this.extraPayment) {
        this.totalPrice = this.price * numberOfConsultations + this.extraPaymentAmount;
      } else {
        this.totalPrice = this.price * numberOfConsultations
      }
    } else {
      this.totalPrice = 0;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  redirectToPayment() {
    this.modalController.dismiss();
    this.nav.navigateRoot('/payment-details');
  }

  isChecked(event) {
    if (this.numberOfConsultations == 0) {
      if (event.detail.checked) {
        this.extraPayment = true;
      } else {
        this.extraPayment = false;
      }
      this.totalPrice = 0;
      return;
    }
    if (event.detail.checked) {
      this.extraPayment = true;
      this.totalPrice = this.totalPrice + this.extraPaymentAmount;
    } else {
      this.extraPayment = false
      this.totalPrice = this.totalPrice - this.extraPaymentAmount;
    }
  }
}
