import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../common/Services/common.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth = false;
  numberOfMessages = 0;
  userUID;

  constructor(private commonSrv: CommonService, private router: Router, private firestoreAuth: AngularFireAuth,
              private firestore: AngularFirestore
  ) {
  }

  ngOnInit(): void {

    this.commonSrv.isAuth$.subscribe(data => {
      if (localStorage.getItem('auth')) {
        alert('sdsda')
        this.checkNotification();
        this.isAuth = true
      } else {
        this.isAuth = false
      }
    })

    this.commonSrv.washNotification$.subscribe(()=> {
      alert('sd')
      this.washOutNotification()
    })
  }

  checkNotification(){
    this.firestoreAuth.user.subscribe(userData => {
      if(userData){
        this.firestore.collection('mydb')
          .doc("xnr4pfHSdTTbfPfPFiRO")
          .collection('users')
          .doc(userData?.uid)
          .valueChanges()
          .pipe(take(1))
          .subscribe((userData)=> {
            if(userData.hasOwnProperty('unSeenMessages')){
              this.numberOfMessages = userData['unSeenMessages']
            }
          })
      }

    })

  }
  washOutNotification() {
    this.numberOfMessages = 0;
    this.firestoreAuth.user.subscribe(userData => {
      this.firestore.collection('mydb')
        .doc("xnr4pfHSdTTbfPfPFiRO")
        .collection('users')
        .doc(userData?.uid)
        .update({'unSeenMessages': 0})
    })

  }

  toggle() {
    this.commonSrv.sidebarToggler$.next();
  }

  signout() {
    localStorage.clear();
    this.firestoreAuth.signOut().then(() => {
      this.router.navigate(['/auth/login'])
      this.commonSrv.isAuth$.next();

    })
  }

}
