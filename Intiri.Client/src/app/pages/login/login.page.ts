import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { VippsState } from 'src/app/models/vipps-state';
import { AccountService } from 'src/app/services/account.service';
import { VerificationTarget } from 'src/app/types/types';
@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  model: any = {};
  public loginForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';

  constructor(
    public accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    private nav: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])],
    });
  }

  get phoneNumberErrors() {
    return this.loginForm.controls.phoneNumber.errors;
  }

  ngOnInit() {
    this.accountService.currentUser$.subscribe(loggedUser => {
      if (loggedUser) {
        console.log(loggedUser);
        if (loggedUser.roles[0] === 'FreeEndUser') {
          this.nav.navigateRoot('/my-intiri');
        } else if (loggedUser.roles[0] === 'Admin') {
          this.nav.navigateRoot('/dashboard');
        } else if (loggedUser.roles[0] === 'InternalDesigner') {
          this.nav.navigateRoot('/client-list')
        }
      }
    });
  }

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
      phoneNumber: this.loginForm.value.phoneNumber
    };
    //const phoneNumberFull = `${loginModel.countryCode}${loginModel.phoneNumber}`;
    this.accountService.login(loginModel).subscribe(
      (response) => {
        this.router.navigate(['/sms-verification'], { queryParams: {
          target: VerificationTarget.LOGIN,
          countryCode: loginModel.countryCode,
          phoneNumber: loginModel.phoneNumber } });
      },
      (error) => {
        console.log(error);
      });
  }

  initiateVippsLogin() {
    const redirectUri = '/processing';
    const state = JSON.stringify(new VippsState('/my-intiri'));

    this.accountService.initiateVippsLogin(redirectUri, state);
  }
}
