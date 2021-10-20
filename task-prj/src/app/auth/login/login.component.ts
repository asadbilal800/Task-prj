import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import { loginModel} from "../../model/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'username',
        placeholder: 'Enter username',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'password',
        placeholder: 'Enter password',
        required: true,
      },
    },
  ];
  constructor(private firestoreAuth: AngularFireAuth,private snackbar: MatSnackBar,
              private router: Router

  ) {
  }

  ngOnInit(): void {
  }

  login(login: loginModel) {
    this.firestoreAuth
      .signInWithEmailAndPassword(login.username, login.password)
      .then(() => {
        this.firestoreAuth.idToken.subscribe((token) => {
          localStorage.setItem('token', token);
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
