import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(loggedUser => {
      if(loggedUser) {
        this.router.navigateByUrl('/my-intiri');
      }
    });
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/sms-verification');
    },error =>{
      console.log(error);
    });
  }

  initiateVippsLogin() {
    this.accountService.initiateVippsLogin();
  }
}
