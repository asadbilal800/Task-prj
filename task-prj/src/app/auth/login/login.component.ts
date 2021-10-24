import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {loginModel} from "../../../common/models/login.model";
import {LOGIN_FORM_CONFIG} from "../../../common/globals";
import {CommonService} from "../../../common/Services/common.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = LOGIN_FORM_CONFIG

  constructor(private firestoreAuth: AngularFireAuth,private snackbar: MatSnackBar,
              private router: Router,private commonSrv: CommonService

  ) {
  }


  //when the user clicks login,the data will be stored in the firebase via angular fire.
  //and appropriate response will be shown in the snackbar
  login(login: loginModel) {
    this.firestoreAuth
      .signInWithEmailAndPassword(login.username, login.password)
      .then(() => {
        localStorage.setItem('auth',"true");
        this.commonSrv.isAuth$.next();
        this.firestoreAuth.idToken.subscribe((token) => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((err) => {
        this.snackbar.open(err.message, 'X', {
          duration: 8000,
          verticalPosition: 'top',
        });
      });

  }
}
