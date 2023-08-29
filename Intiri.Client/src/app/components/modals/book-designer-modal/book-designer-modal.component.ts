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
  duration: number;
  totalPrice: number;
  extraPayment = false;
  extraPaymentAmount = 3500;
  numberOfConsultations = 1;

  items = [
    {
      id: 1, name: 'suggestion', isChecked: false
    },
    {
      id: 2, name: 'furnishing', isChecked: false
    },
    {
      id: 3, name: 'drawings', isChecked: false
    },
    {
      id: 4, name: 'floor', isChecked: false
    },
    {
      id: 5, name: 'kitchen', isChecked: false
    },
    {
      id: 6, name: 'bath', isChecked: false
    },
    {
      id: 7, name: 'lighting', isChecked: false
    },
    {
      id: 8, name: 'furniture', isChecked: false
    },
    {
      id: 9, name: '2D', isChecked: false
    },
    {
      id: 10, name: '3D', isChecked: false
    },
    {
      id: 11, name: 'project', isChecked: false
    },
    {
      id: 12, name: 'quesiton', isChecked: false
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

    this.spinner.show();
    this.commonService.getConsulationsInfo().subscribe((res: any) => {
      this.spinner.hide();
      this.duration = res?.duration;
      this.price = res?.price;
      this.totalPrice = this.price * this.numberOfConsultations;
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: this.translate.instant('NOTIFY.consultation-get-error'),
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
    const consultationDetails = this.getConsultationDetails();
    this.paymentService.sendPayment(
      {
        name: 'Consulatations', //required
        amount: this.totalPrice * 100,//required
        receiverId: this.designer.id, //required
        locale: this.languageService.selected === 'no' ? 'nb' : 'en', //optional, if not specified 'en' default
        successUrlPath: `messenger?contact=${this.designer.id}`,//required
        cancelUrlPath: '',//optional, if not specified path is ''
        moodboardId: this.moodboard?.id, //optional
        consultationDetails,
        numberOfConsultations: this.numberOfConsultations, //required
        Domain: environment.apiUrl.split('/api')[0]
      }).subscribe(async (res: any) => {
      let stripe = await loadStripe(environment.stripe_key);
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

  getConsultationDetails() {
    let details = [];
    this.items.forEach(e => {
      if(e['isChecked']) {
        details.push(e.name);
      }
    })
    if(this.extraPayment) {
      // details.push('2D & 3D drawings');
      details.push('2d3d');
    }
    return String(details);
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
