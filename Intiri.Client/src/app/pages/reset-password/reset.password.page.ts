import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPassForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.intitializeForm();
  }

  intitializeForm() {
    this.resetPassForm = this.fb.group({
      password: [''],
      confirmPassword: [''],

      // This is only for testing and presenatation purpose
      phoneNumber: localStorage.getItem('userPhone'),
      token: localStorage.getItem('resetToken'),
    });
  }

  resetPassword() {
    this.accountService.resetPassword(this.resetPassForm.value).subscribe(
      (response) => {
        // This is only for testing and presenatation purpose
        localStorage.removeItem('resetToken');
        localStorage.removeItem('userPhone');

        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
