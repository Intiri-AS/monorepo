import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PaymentService } from 'src/app/services/payment.service';
import { loadStripe } from '@stripe/stripe-js';
import { LanguageService } from 'src/app/services/language.service';
import { CommonService } from 'src/app/services/common.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book-designer-modal',
  templateUrl: './book-designer-modal.component.html',
  styleUrls: ['./book-designer-modal.component.scss'],
})

export class BookDesignerModalComponent {

  designer; //as modal prop
  moodboard;//as modal prop
  price: number;
  duration: number;
  totalPrice: number;
  extraPayment = false;
  extraPaymentAmount = 3500;
  numberOfConsultations = 1;

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
    private paymentService: PaymentService,
    private languageService: LanguageService,
    private commonService: CommonService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {

    this.spinner.show();
    this.commonService.getConsulationsInfo().subscribe((res: any) => {
      this.spinner.hide();
      this.duration = res?.duration;
      this.price = res?.price;
      this.totalPrice = this.price * this.numberOfConsultations;
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Cannot get consultations info.',
        type: 'error',
      });
    })

  }

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
    if(this.totalPrice > 0) {
      this.checkout();
    }
  }

  checkout(): void {
    this.paymentService.sendPayment(
      {
        name: 'Consulatations', //required
        amount: this.totalPrice * 100,//required
        receiverId: this.designer.id, //required
        locale: this.languageService.selected === 'no' ? 'nb' : 'en', //optional, if not specified 'en' default
        successUrlPath: `messenger?contact=${this.designer.id}`,//required
        cancelUrlPath: '',//optional, if not specified path is ''
        moodboardId: this.moodboard?.id, //optional
        numberOfConsultations: this.numberOfConsultations //required
      }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51LrTfeKX8zAv4zjwkaohTpcztUdLuubYRrbzdmyKHqX7dR1LP5kNNyCrUZHCplwPrrEmHyTz9TW480BSefHTL0Y700LOOrqXGT');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

  isChecked(event) {
    if (event.detail.checked) {
      this.extraPayment = true;
      this.totalPrice = this.totalPrice + this.extraPaymentAmount;
    } else {
      this.extraPayment = false
      this.totalPrice = this.totalPrice - this.extraPaymentAmount;
    }
  }
}
