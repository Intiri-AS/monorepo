import { Component } from '@angular/core';

@Component({
  selector: 'app-sms-verification-page',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})

export class SmsVerificationPage {

  constructor() {}

  // this called every time when user changed the code
  onCodeChanged(code) {
    console.log('change', code);
  }

  // this called only if user entered full code
  onCodeCompleted(code) {
    console.log('completed', code);
  }
}
