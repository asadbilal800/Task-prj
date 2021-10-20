import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {signupModel} from "../../model/register.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({});
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
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'Enter email',
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

  constructor(private firestorAuth: AngularFireAuth,private firestore: AngularFirestore,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  register(model: signupModel) {

    this.firestorAuth
      .createUserWithEmailAndPassword(model.email, model.password)
      .then((data) => {
        this.firestore
          .collection('users')
          .doc(`${data.user.uid}`)
          .collection('profile')
          .doc()
          .set(model)
          .then((value) => {
            this.snackBar.open("User has been registered!", 'X', {
              duration: 8000,
              verticalPosition: 'top',
            });
          });
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'X', {
          duration: 8000,
          verticalPosition: 'top',
        });
      });
  }
}
