import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeInputComponent } from 'angular-code-input';
import { SmsVerificationDTO } from 'src/app/DTOs/sms-verification.dto';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sms-verification-page',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})

export class SmsVerificationPage implements OnInit {
  private phoneNumber: string;
  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  // This is only for testing and presenatation purpose
  loginCode = '111111';
  registerCode = '222222'
  resetPassCode = '333333'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
  }

  // this called every time when user changed the code
  onCodeChanged(code) {
    //console.log('change', code);
  }

  // this called only if user entered full code
  public onCodeCompleted(verificationCode) {
    this.accountService.smsVerification(this.phoneNumber, verificationCode);
    // This is only for testing and presenatation purpose
    if(this.loginCode === verificationCode) {
      this.router.navigateByUrl('/my-intiri');
    } else if (this.resetPassCode === verificationCode) {
      this.router.navigateByUrl('/reset-password');
    } else if (this.registerCode === verificationCode) {
      this.router.navigateByUrl('/login');
    }

    // Reset code input fields
    this.codeInput.reset();
  }
}