
import { Component } from '@angular/core';


@Component({
  selector: 'app-payment-details-page',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})

export class PaymentDetailsPage {

  items = [
    { name: 'Color advice' },
    { name: 'Room sketch' },
    { name: 'Moodboard adjustment' },
    { name: 'Select products' },
    { name: 'Decoration' },
  ];

  consultationPrice = 950;
  currency = 'NOK';
  consultationNumber = 3;
  totalPrice = 2850;



  constructor() {}



  ngOnInit() {}





}
