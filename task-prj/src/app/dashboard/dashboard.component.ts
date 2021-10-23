import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {CommonService} from "../../common/Services/common.service";
import {MatSidenav} from "@angular/material/sidenav";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sideNav: MatSidenav;


  constructor(private firestoreAuth: AngularFireAuth, private router: Router,
              private commonSrv: CommonService) {
  }

  ngOnInit(): void {
    this.commonSrv.sidebarToggler$.subscribe(data => {
      this.sideNav?.toggle();
    });

  }

  signOut() {
    this.firestoreAuth.signOut().then(() => {
      this.router.navigate(['/auth/login'])
      localStorage.clear()
      this.commonSrv.isAuth$.next();

    })
  }
}
