import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../common/Services/common.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth = false;
  numberOfMessages = 1;

  constructor(private commonSrv: CommonService, private router: Router, private firestoreAuth: AngularFireAuth
  ) {
  }

  ngOnInit(): void {

    this.commonSrv.isAuth$.subscribe(data => {
      if (localStorage.getItem('auth')) {
        this.isAuth = true
      } else {
        this.isAuth = false
      }
    })


  }

  toggle() {
    this.commonSrv.sidebarToggler$.next();
  }

  signout() {
    this.firestoreAuth.signOut().then(() => {
      this.router.navigate(['/auth/login'])
      localStorage.clear()
      this.commonSrv.isAuth$.next();

    })
  }

  washOutNotification() {
    this.numberOfMessages = 0;
  }
}
