import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  model: any = {}
  public loginForm: FormGroup;
  public isFormSubmited = false;
  public activeCode = '47';

  get phoneNumberErrors() {
    return this.loginForm.controls.phoneNumber.errors;
  }

  constructor(
    public accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])],
    })
  }

  ngOnInit() {
    this.accountService.currentUser$.subscribe(loggedUser => {
      if(loggedUser) {
        this.router.navigateByUrl('/my-intiri');
      }
    });
  }

  setActiveCode(event) {
    this.activeCode = event.detail.value;
  }

  login(){
    this.isFormSubmited = true;
    if (!this.loginForm.valid) {
      return;
    }
    const loginModel = {
      code: this.activeCode,
      phone: this.loginForm.value.phoneNumber
    }
    this.accountService.login(loginModel).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/sms-verification');
    },error =>{
      console.log(error);
    })
  }
}
