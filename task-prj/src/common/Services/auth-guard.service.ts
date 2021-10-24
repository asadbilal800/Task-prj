import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})

// this class is basically used to protect the authenticated routes,mainly '/dashboard'
export class AuthGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private firestoreAuth: AngularFireAuth, private router: Router) {
    this.firestoreAuth.idToken.subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true
    } else {
      return this.router.createUrlTree(['auth/login']);

    }
  }
}
