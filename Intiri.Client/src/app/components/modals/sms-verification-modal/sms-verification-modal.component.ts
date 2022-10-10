import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { CodeInputComponent } from "angular-code-input";
import { AccountService } from "src/app/services/account.service";
import { VerificationTarget } from "src/app/types/types";

@Component({
    selector: 'app-sms-verification-modal',
    templateUrl: './sms-verification-modal.component.html',
})
export class SmsVerificationModalComponent implements OnInit {
    @ViewChild('codeInput') codeInput !: CodeInputComponent;
    error: string;
    step: string;
    phoneNumberFull: string;
    verificationTarget: VerificationTarget;

    constructor(
        private accountService: AccountService,
        private router: Router,
        private modalController: ModalController) { }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.modalController.dismiss();
            }
        })
    }

    onCodeChanged(verificationCode) {
        //console.log('change', code);
    }

    public onCodeCompleted(verificationCode) {
        this.accountService.smsVerificationLogin("countryCode", "phoneNumber", verificationCode)
            .subscribe(response => {
                this.router.navigate(['/new-project'], { queryParams: { step: this.step } });
                this.modalController.dismiss({ dismissed: true });
            }, error => {
                this.error = error.error;
                console.log(error);
            });
    }

    resendVerificationCode() {
        this.accountService.resendVerificationCode(this.phoneNumberFull).subscribe(
            response => {
                // nothing to do here
            }, error => {
                this.error = error.error;
                console.log(error);
            }
        )
    }
}
