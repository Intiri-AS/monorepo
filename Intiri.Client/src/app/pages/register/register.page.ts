import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
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

  public registerForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';
  error: HttpErrorResponse;

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
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])],
    })
  }

  setActiveCode(event) {
    this.activeCode = event.detail.value;
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
        this.router.navigate(
          ['/sms-verification'],
          { queryParams: { target: VerificationTarget.REGISTER , ...response } }
        );
      }, error => {
        this.error = error;
        console.log(error);
      });
  }
}
