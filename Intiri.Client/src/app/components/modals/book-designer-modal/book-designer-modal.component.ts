import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PaymentService } from 'src/app/services/payment.service';
import { loadStripe } from '@stripe/stripe-js';
import { LanguageService } from 'src/app/services/language.service';
import { CommonService } from 'src/app/services/common.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-designer-modal',
  templateUrl: './book-designer-modal.component.html',
  styleUrls: ['./book-designer-modal.component.scss'],
})

export class BookDesignerModalComponent {

  designer; //as modal prop
  moodboard;//as modal prop
  price: number;
  duration: number = 60;
  totalPrice: number;
  extraPayment = false;
  extraPaymentAmount = 3500;
  numberOfConsultations = 1;

  items = [
    {
      id: 1, name: 'Color and material suggestions', isChecked: false
    },
    {
      id: 2, name: 'Furnishing plan', isChecked: false
    },
    {
      id: 3, name: 'Technical drawings', isChecked: false
    },
    {
      id: 4, name: 'Floor plans', isChecked: false
    },
    {
      id: 5, name: 'Kitchen', isChecked: false
    },
    {
      id: 6, name: 'Bath', isChecked: false
    },
    {
      id: 7, name: 'Lighting plan', isChecked: false
    },
    {
      id: 8, name: 'Furniture design', isChecked: false
    },
    {
      id: 9, name: '2D visualization', isChecked: false
    },
    {
      id: 10, name: '3D visualization', isChecked: false
    },
    {
      id: 11, name: 'Project management', isChecked: false
    },
    {
      id: 12, name: 'Others', isChecked: false
    }
  ];

  constructor(
    private modalController: ModalController,
    private paymentService: PaymentService,
    private languageService: LanguageService,
    private commonService: CommonService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.price = this.designer.designerInfo.price;
    this.totalPrice = this.price * this.numberOfConsultations;

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
    const consultationDetails = this.getConsultationDetails();
    let sendPaymentObject = {
      name: this.languageService.selected === 'no' ? 'Totalt' : 'Total', //required
      amount: this.totalPrice * 100,//required
      receiverId: this.designer.id, //required
      locale: this.languageService.selected === 'no' ? 'nb' : 'en', //optional, if not specified 'en' default
      successUrlPath: `messenger?contact=${this.designer.id}`,//required
      cancelUrlPath: '',//optional, if not specified path is ''
      moodboardId: this.moodboard?.id, //optional
      consultationDetails,
      numberOfConsultations: this.numberOfConsultations, //required
      Domain: environment.apiUrl.split('/api')[0]
    };
    this.paymentService.sendPayment(sendPaymentObject).subscribe(async (res: any) => {
      let stripe = await loadStripe(environment.stripe_key);
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
    });
  }

  getConsultationDetails() {
    let details = [];
    this.items.forEach(e => {
      if(e['isChecked']) {
        details.push(e.name);
      }
    });
    return String(details);
  }

  isChecked(event) {
    if (event.detail.checked) {
      this.extraPayment = true;
      this.totalPrice = this.totalPrice + this.extraPaymentAmount;
    } else {
      this.extraPayment = false;
      this.totalPrice = this.totalPrice - this.extraPaymentAmount;
    }
  }
}
