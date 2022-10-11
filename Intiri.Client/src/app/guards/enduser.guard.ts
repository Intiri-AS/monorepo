import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})

export class EnduserGuard implements CanActivate {

  constructor(
    private nav: NavController,
    private accountService: AccountService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //TODO Guard code here
    this.accountService.currentUser$.subscribe(user => {
      if (user) {
        if (user.roles[0] !== 'FreeEndUser') {
          this.nav.navigateRoot('/login');
          return false;
        }
      }
    })
    return true;
  }
}
