import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { VippsAccessTokenRequestDTO } from '../DTOs/vipps-access-token.dto';
import { VippsAuthUrlRequestDTO } from '../DTOs/vipps-auth-url.dto';
import { SmsVerificationDTO } from '../DTOs/sms-verification.dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model) {
    return this.http.post(this.apiUrl + 'account/login', model).subscribe(
      () => {

      }, error => {
        console.log();
      }
    )
  }

  smsVerification(phoneNumber: string, verificationCode: string) {
    const verificationDTO = new SmsVerificationDTO(phoneNumber, verificationCode);
    return this.http.post(this.apiUrl + 'account/sms-verification', verificationDTO).pipe(
      map((user: User) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model) {
    return this.http.post(this.apiUrl + 'account/register', model);
  }

  setCurrentUser(user: User) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  forgotPassword(model: any) {
    return this.http.patch(this.apiUrl + 'account/forgot-password', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          // This is only for testing and presenatation purpose
          localStorage.setItem('resetToken', response.token);
          localStorage.setItem('userPhone', response.phoneNumber);
        }
      })
    );
  }

  resetPassword(model: any) {
    return this.http.post(this.apiUrl + 'account/reset-password', model);
  }

  initiateVippsLogin(redirectionPath: string, state: string): Subscription {
    const redirectionUri = location.origin + redirectionPath;
    const authUrlRequest = new VippsAuthUrlRequestDTO(redirectionUri, state);
    return this.http
      .post<any>(this.apiUrl + 'account/vipps-auth-url', authUrlRequest)
      .subscribe(
        (response) => {
          if (response) {
            window.location.href = String(response.authorizationUrl);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  finalizeVippsLogin(auth: VippsAccessTokenRequestDTO): Observable<void> {
    return this.http.post<any>(this.apiUrl + 'account/vipps-login', auth).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }
}
