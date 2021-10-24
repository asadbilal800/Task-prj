import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {CommonService} from "../../common/Services/common.service";
import {MatSidenav} from "@angular/material/sidenav";

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

  //on init,this is basically to toggle the sidenav from any side of the screen.
  ngOnInit(): void {
    this.commonSrv.sidebarToggler$.subscribe(data => {
      this.sideNav?.toggle();
    });

  }

  //when user click logout,clear the local storage,observable and route to login again.
  signOut() {
    localStorage.clear()
    setTimeout(()=> {
      this.commonSrv.isAuth$.next();

      this.router.navigate(['/auth/login']).then(()=> {
      })
    },500)


  }
}
