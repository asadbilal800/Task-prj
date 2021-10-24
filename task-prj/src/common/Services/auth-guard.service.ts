import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {CommonService} from "./common.service";

@Injectable({
  providedIn: 'root'
})

// this class is basically used to protect the authenticated routes,mainly '/dashboard'
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private commonSrv: CommonService, private router: Router) {
    this.commonSrv.isAuth$.subscribe(data => {
        this.isLoggedIn = true;
    })
  }

  //if user is authenticated then log in,else re-direct to login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true
    } else {
      return this.router.createUrlTree(['auth/login']);

    }
  }
}
