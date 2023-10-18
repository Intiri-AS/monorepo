import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AdminDesignerGuard implements CanActivate {
  constructor(
    private nav: NavController,
    private accountService: AccountService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (
          (user && user.roles[0] === 'Admin') ||
          user.roles[0] === 'InternalDesigner' ||
          user.roles[0] === 'ExternalDesigner'
        ) {
          return true;
        } else {
          this.nav.navigateRoot('/login');
          return false;
        }
      })
    );
  }
}
