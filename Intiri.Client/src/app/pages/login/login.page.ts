import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';
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
  error: HttpErrorResponse;

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
    this.accountService.currentUser$.pipe(take(1)).subscribe(loggedUser => {
      if (loggedUser) {
        const routes = this.accountService.homepageRoutes;
        this.nav.navigateRoot(routes[loggedUser.roles[0]]);
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
    this.accountService.login(loginModel).subscribe(
      (response) => {
        this.router.navigate(['/sms-verification'], { queryParams: {
          target: VerificationTarget.LOGIN,
          countryCode: loginModel.countryCode,
          phoneNumber: loginModel.phoneNumber } });
      }, e => {
        this.error = e.error;
      });
  }

  initiateVippsLogin() {
    const redirectUri = '/processing';
    const state = JSON.stringify(new VippsState('/my-intiri'));

    this.accountService.initiateVippsLogin(redirectUri, state);
  }

  onIntiriIconClick () {
    window.location.replace('https://intiri.no');
  }
}
