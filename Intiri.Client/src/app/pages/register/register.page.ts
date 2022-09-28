import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  public registerForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';

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
    const registerModel = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      code: this.activeCode,
      phone: this.registerForm.value.phoneNumber
    }
    this.accountService.register(registerModel).subscribe(response => {
      this.router.navigateByUrl('/sms-verification');
    }, error => {
      console.log(error);
    })
  }
}
