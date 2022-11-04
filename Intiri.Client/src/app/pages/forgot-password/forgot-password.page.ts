import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountService.currentUser$.pipe(take(1)).subscribe(loggedUser => {
      if(loggedUser) {
        this.router.navigateByUrl('/my-intiri');
      }
    });
  }

  forgotPassword() {
    this.accountService.forgotPassword(this.model).subscribe(response => {
      this.router.navigateByUrl('/sms-verification');
    },error =>{
      console.log(error);
    })
  }

}
