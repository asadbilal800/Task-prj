import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../common/Services/common.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {TranslateService} from "@ngx-translate/core";
import {LANG} from "../../common/globals";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth = false;
  numberOfMessages = 0;
  userUID;
  languageList: any = LANG
  currentLanguage: string;
  option;


  constructor(private commonSrv: CommonService, private router: Router, private firestoreAuth: AngularFireAuth,
              private firestore: AngularFirestore,private translateSrv: TranslateService
  ) {
  }

  //on init,it will check whether the user has notification of messages?
  // and whether the user is authenticated,in order to show/hide the items on navbar.
  ngOnInit(): void {

    this.commonSrv.isAuth$.subscribe(data => {
      if (localStorage.getItem('auth')) {
        this.isAuth = true
      } else {
        this.isAuth = false
      }
    })

  }

  //following function is to toggle then sidenav.
  toggle() {
    this.commonSrv.sidebarToggler$.next();
  }

  //this onchange is for toggling language of the enitre project.
  onChange() {
    this.translateSrv.use(this.currentLanguage)
  }
}
