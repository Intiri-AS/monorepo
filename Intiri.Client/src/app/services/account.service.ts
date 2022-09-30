import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { User } from '../models/user.model';
import { AccessTokenRequestDTO } from '../DTO/vipps-types';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  apiUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.apiUrl + 'account/login', model).pipe(
      map((user: User) =>{
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.apiUrl + 'account/register', model);
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

 forgotPassword(model: any) {
    return this.http.patch(this.apiUrl + 'account/forgot-password', model).pipe(
      map((response: User) =>{
        const user = response;
        if (user) {

          // This is only for testing and presenatation purpose
          localStorage.setItem('resetToken', response.token);
          localStorage.setItem('userPhone', response.phoneNumber);
        }
      })
    )
  }

  resetPassword(model: any){
    return this.http.post(this.apiUrl + 'account/reset-password', model);
  }

  startVippsLogin() {
    return this.http.get<any>(this.apiUrl + 'account/vipps-auth-url')
      .subscribe(resp => {
        console.log(resp.authorizationUrl);

        if (resp?.authorizationUrl)
        {
          window.location.href = resp.authorizationUrl;
        }
      });
  }

  finalizeVippsLogin(auth: AccessTokenRequestDTO) {
    return this.http.post<any>(this.apiUrl + 'account/vipps-login', auth)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
