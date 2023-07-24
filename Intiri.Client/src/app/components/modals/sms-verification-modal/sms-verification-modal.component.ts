import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { CodeInputComponent } from "angular-code-input";
import { AccountService } from "src/app/services/account.service";
import { VerificationTarget } from "src/app/types/types";

@Component({
    selector: 'app-sms-verification-modal',
    templateUrl: './sms-verification-modal.component.html',
    styleUrls: ['./sms-verification-modal.component.scss'],
})
export class SmsVerificationModalComponent {
    @ViewChild('codeInput') codeInput !: CodeInputComponent;
    error: string;
    step: string;
    phoneModel: any;
    verificationTarget: VerificationTarget;

    constructor(
        private accountService: AccountService,
        private router: Router,
        private modalController: ModalController) { }

    onCodeChanged(verificationCode) {
        //console.log('change', code);
    }

    public onCodeCompleted(verificationCode) {
        this.accountService.smsVerificationLogin(this.phoneModel.countryCode, this.phoneModel.phoneNumber, verificationCode)
            .subscribe(response => {
                this.router.navigate(['/new-project'], { queryParams: { step: this.step } });
                this.modalController.dismiss({ dismissed: true });
            }, error => {
                this.error = error.error;
            });
    }

    resendVerificationCode() {
        this.accountService.resendVerificationCode(this.phoneModel.countryCode, this.phoneModel.phoneNumber).subscribe(
            response => {
                // nothing to do here
            }, error => {
                this.error = error.error;
                console.log(error);
            }
        )
    }
}
