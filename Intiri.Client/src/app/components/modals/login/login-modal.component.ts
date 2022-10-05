import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { VippsState } from 'src/app/models/vipps-state';
import { AccountService } from 'src/app/services/account.service';

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
    private serializer: UrlSerializer
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
    this.accountService.login(loginModel).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/sms-verification');
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
}
