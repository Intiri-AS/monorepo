import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService, private nav: NavController) {}
  
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      let currentUser: User;
  
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
      if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        })
      }
  
      return next.handle(request).pipe(
        catchError((error) => {
            if (error.status === 401)
            {
              this.handleAuthError();
              return of(error);
            }
            throw error;
          }
        )
      );
    }

    private handleAuthError( ) {
      this.accountService.logout();
      this.nav.navigateRoot('/landing');
    }

  }