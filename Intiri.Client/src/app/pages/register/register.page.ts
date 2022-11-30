import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterInDTO } from 'src/app/DTOs/In/register-in.dto';
import { RegisterOutDTO } from 'src/app/DTOs/Out/register-out.dto';
import { AccountService } from 'src/app/services/account.service';
import { VerificationTarget } from 'src/app/types/types';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  @ViewChild('phoneNumber') phoneNumberInput;

  public registerForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';
  error: HttpErrorResponse;
  newProjectPageStep: number;

  get firstNameErrors() {
    return this.registerForm.controls.firstName.errors;
  }

  get lastNameErrors() {
    return this.registerForm.controls.lastName.errors;
  }

  get phoneNumberErrors() {
    return this.registerForm.controls.phoneNumber.errors;
  }

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ]),
      ],
    });

    const state = router.getCurrentNavigation().extras.state;
    if (state) {
      this.newProjectPageStep = state['step'];
    }
  }

  setActiveCode(event) {
    this.activeCode = event.detail.value;
    setTimeout(() => {
      this.phoneNumberInput.setFocus();
    }, 250);
    this.cd.markForCheck();
  }

  register() {
    this.isFormSubmited = true;
    if (!this.registerForm.valid) {
      return;
    }
    const registerModel = new RegisterOutDTO(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.activeCode,
      this.registerForm.value.phoneNumber
    );
    this.accountService.register(registerModel).subscribe(
      (response: RegisterInDTO) => {
        const queryParams = {
          target: VerificationTarget.REGISTER,
          ...response,
          step: this.newProjectPageStep,
        };

        Object.keys(queryParams)
          .filter(
            (key) => queryParams[key] === null || queryParams[key] === undefined
          )
          .forEach((key) => delete queryParams[key]);

        this.router.navigate(['/sms-verification'], {
          queryParams: queryParams,
        });
      },
      (e) => {
        this.error = e.error;
      }
    );
  }
}
