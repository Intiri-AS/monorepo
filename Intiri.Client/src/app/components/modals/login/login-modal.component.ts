import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VippsState } from 'src/app/models/vipps-state';
import { AccountService } from 'src/app/services/account.service';
import { VerificationTarget } from 'src/app/types/types';
import { SmsVerificationModalComponent } from '../sms-verification-modal/sms-verification-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  model: any = {};
  public loginForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';

  constructor(
    public accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    private serializer: UrlSerializer,
    private modalController: ModalController
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
    });
  }

  get phoneNumberErrors() {
    return this.loginForm.controls.phoneNumber.errors;
  }

  ngOnInit() {}

  setActiveCode(event) {
    this.activeCode = event.detail.value;
  }

  login() {
    this.isFormSubmited = true;
    if (!this.loginForm.valid) {
      return;
    }
    const loginModel = {
      countryCode: this.activeCode,
      phoneNumber: this.loginForm.value.phoneNumber,
    };
    const phoneNumberFull = `+${loginModel.countryCode}${loginModel.phoneNumber}`;
    this.accountService.login(loginModel).subscribe(
      () => {
        this.openSmsVerificationModal(phoneNumberFull);
        this.dismiss();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  initiateVippsLogin() {
    const redirectUri = '/processing';
    const returnUrlTree = this.router.createUrlTree([], {
      queryParams: { step: 3 },
    });
    const returnUri = this.serializer.serialize(returnUrlTree);
    const state = JSON.stringify(new VippsState(returnUri));
    this.accountService.initiateVippsLogin(redirectUri, state);
  }

  private async openSmsVerificationModal(phoneNumberFull: string): Promise<void> {
    const modal = await this.modalController.create({
      component: SmsVerificationModalComponent,
      componentProps: { phoneNumberFull, step : '3', verificationTarget: VerificationTarget.LOGIN},
      cssClass: 'medium-modal-css',
      backdropDismiss: false,
      swipeToClose: false,
    });
    
    await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
}
}
