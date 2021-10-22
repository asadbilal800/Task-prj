import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latestArticles: any;

  constructor(private firestoreAuth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.firestoreAuth.signOut();
    this.router.navigate(['/auth/login'])
  }
}
