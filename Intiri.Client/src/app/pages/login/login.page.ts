import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VippsState } from 'src/app/models/vipps-state';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  model: any = {};
  public loginForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '+47';

  constructor(
    public accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
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
        this.router.navigateByUrl('/my-intiri');
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
    const phoneNumber = `${loginModel.countryCode}${loginModel.phoneNumber}`;
    this.accountService.login(loginModel).subscribe(
      (response) => {
        this.router.navigate(['/sms-verification'], { queryParams: { phoneNumber } });
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
