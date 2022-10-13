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

  constructor(private http: HttpClient) { }

  login(model) {
    return this.http.post(this.apiUrl + 'account/login', model);
  }

  register(model) {
    return this.http.post(this.apiUrl + 'account/register', model);
  }

  smsVerificationLogin(countryCode: string, phoneNumber: string, verificationCode: string) {
    const verificationDTO = new SmsVerificationDTO(countryCode, phoneNumber, verificationCode);
    return this.http.post(this.apiUrl + 'account/sms-verification-login', verificationDTO)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setCurrentUser(user);
          }
        })
      );
  }

  smsVerificationRegister(
    countryCode: string,
    phoneNumber: string,
    verificationCode: string,
    firstName: string,
    lastName: string) {

    const verificationDTO =
    {
      countryCode,
      phoneNumber,
      verificationCode,
      firstName,
      lastName
    } as SmsVerificationDTO;

    return this.http.post(this.apiUrl + 'account/sms-verification-register', verificationDTO)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setCurrentUser(user);
          }
        })
      );
  }

  resendVerificationCode(phoneNumberFull) {
    return this.http.post(this.apiUrl + 'account/resend-sms-verification', {phoneNumberFull});
  }

  setCurrentUser(user: User) {
    if(user){
      user.roles = [];
      const tokenData = this.getDecodedToken(user.token);
      const roles = tokenData.role;
      Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
      user.id = parseInt(tokenData.nameid);
      user.fullName = tokenData.name;
      user.photoPath = user.photoPath ? user.photoPath : tokenData.prn;
      localStorage.setItem('user', JSON.stringify(user));
    }
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
