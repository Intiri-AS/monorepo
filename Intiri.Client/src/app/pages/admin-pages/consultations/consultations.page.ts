import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-consultations-page',
  templateUrl: './consultations.page.html',
  styleUrls: ['./consultations.page.scss'],
})
export class ConsultationsPage {
  duration: number;
  price: number;
  initDuration: number;
  initPrice: number;

  constructor(
    private service: CommonService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.service.getConsulationsInfo().subscribe(
      (res: any) => {
        this.spinner.hide();
        this.duration = res?.duration;
        this.price = res?.price;
        this.initDuration = res?.duration;
        this.initPrice = res?.price;
      },
      () => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.consultation-get-error'),
          type: 'error',
        });
      }
    );
  }

  updateConsultationsInfo() {
    this.spinner.show();
    this.service
      .updateConsulationsInfo({ price: this.price, duration: this.duration })
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.initDuration = this.duration;
          this.initPrice = this.price;
          this.notifier.show({
            message: this.translate.instant('NOTIFY.consultation-updated'),
            type: 'success',
          });
        },
        () => {
          this.spinner.hide();
          this.notifier.show({
            message: this.translate.instant(
              'NOTIFY.consultation-updated--error'
            ),
            type: 'error',
          });
        }
      );
  }
}
