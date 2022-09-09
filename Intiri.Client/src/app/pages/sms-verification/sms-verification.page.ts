import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {CodeInputComponent} from 'angular-code-input';

@Component({
  selector: 'app-sms-verification-page',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})

export class SmsVerificationPage implements OnInit{

  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  // This is only for testing and presenatation purpose
  loginCode = '111111';
  registerCode = '222222'
  resetPassCode = '333333'

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // this called every time when user changed the code
  onCodeChanged(code) {
    //console.log('change', code);
  }

  // this called only if user entered full code
  public onCodeCompleted(code) {

    // This is only for testing and presenatation purpose
    if (this.loginCode === code) {
      this.router.navigateByUrl('/my-intiri');
    }else if (this.resetPassCode === code) {
      this.router.navigateByUrl('/reset-password');
    }else if(this.registerCode === code){
      this.router.navigateByUrl('/login');
    }

    // Reset code input fields
    this.codeInput.reset();
  }
}