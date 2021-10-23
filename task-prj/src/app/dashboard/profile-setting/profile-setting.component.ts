import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {signupModel} from "../../../common/models/register.model";
import {take} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  userModel: signupModel;
  usernameInput = true

  constructor(private firestoreAuth: AngularFireAuth, private fireStore: AngularFirestore,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.firestoreAuth.user.subscribe(userData => {
      this.fireStore
        .collection('mydb')
        .doc("xnr4pfHSdTTbfPfPFiRO")
        .collection("users")
        .doc(`${userData.uid}`).valueChanges()
        .pipe(take(1))
        .subscribe(data => {
          this.userModel = data as signupModel
        })
    })

  }

  save(username: string, value: string) {
    this.fireStore
      .collection('mydb')
      .doc("xnr4pfHSdTTbfPfPFiRO")
      .collection("users")
      .doc(`${this.userModel.uid}`)
      .update({'username': value})
      .then(() => {
        this.snackBar.open("Successfully username updated", 'X', {
          duration: 5000,
          verticalPosition: 'top',
        });
      })

  }
}
