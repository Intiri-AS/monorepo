import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeInputComponent } from 'angular-code-input';
import { AccountService } from 'src/app/services/account.service';
import { VerificationTarget } from 'src/app/types/types';

@Component({
  selector: 'app-sms-verification-page',
  templateUrl: './sms-verification.page.html',
  styleUrls: ['./sms-verification.page.scss'],
})

export class SmsVerificationPage implements OnInit {
  error: string;
  verificationTarget: VerificationTarget;
  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.getVerificationTarget();
  }

  // this called every time when user changed the code
  onCodeChanged(code) {
    //console.log('change', code);
  }

  // this called only if user entered full code
  public onCodeCompleted(verificationCode) {
    switch (this.verificationTarget) {
      case VerificationTarget.LOGIN:
        {
          const countryCode = this.getQueryParamFromSnapshot('countryCode');
          const phoneNumber = this.getQueryParamFromSnapshot('phoneNumber');
          this.accountService.smsVerificationLogin(countryCode, phoneNumber, verificationCode)
            .subscribe(response => {
              this.router.navigate(['/my-intiri']);
            }, error => {
              this.error = error;
              console.log(error);
            });
          break;
        }
      case VerificationTarget.REGISTER:
        {
          const countryCode = this.getQueryParamFromSnapshot('countryCode');
          const phoneNumber = this.getQueryParamFromSnapshot('phoneNumber');
          const firstName = this.getQueryParamFromSnapshot('firstName');
          const lastName = this.getQueryParamFromSnapshot('lastName');
          const step = this.getQueryParamFromSnapshot('step');

          this.accountService.smsVerificationRegister(
            countryCode,
            phoneNumber,
            verificationCode,
            firstName,
            lastName
          ).subscribe(response => {
            if (step) {
              this.router.navigate(['/new-project'], {queryParams: {step}});
            } else {
              this.router.navigate(['/my-intiri']);
            }
          }, error => {
            this.error = error;
            console.log(error);
          });
          break;
        }
      default:
        console.log('Invalid value for verification target', this.verificationTarget);
        break;
    }
    this.codeInput.reset();
  }

  resendVerificationCode() {
    const phoneNumberFull = this.getQueryParamFromSnapshot('phoneNumberFull');
    this.accountService.resendVerificationCode(phoneNumberFull).subscribe(
      response => {
        // nothing to do here
      }, error => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  private getVerificationTarget() {
    const target = this.route.snapshot.queryParamMap.get('target');
    if (target) {
      this.verificationTarget = target as VerificationTarget;
    }
  }

  private getQueryParamFromSnapshot(param: string): string {
    return this.route.snapshot.queryParamMap.get(param);
  }
}
