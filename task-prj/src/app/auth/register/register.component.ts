import {Component} from '@angular/core';
import { FormGroup} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatSnackBar} from "@angular/material/snack-bar";
import {signupModel} from "../../../common/models/register.model";
import {Router} from "@angular/router";
import {REGISTER_FORM_CONFIG} from "../../../common/globals";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = REGISTER_FORM_CONFIG

  constructor(private firestorAuth: AngularFireAuth,private firestore: AngularFirestore,
              private snackBar: MatSnackBar,private router: Router) {
  }

  register(model: signupModel) {

    this.firestorAuth
      .createUserWithEmailAndPassword(model.email, model.password)
      .then((data) => {
        model.uid = data.user.uid
        this.firestore
          .collection('mydb')
          .doc("xnr4pfHSdTTbfPfPFiRO")
          .collection("users")
          .doc(`${data.user.uid}`)
          .set(model)
          .then((value) => {
            this.firestorAuth.signOut();
            this.snackBar.open("User has been registered!", 'X', {
              duration: 5000,
              verticalPosition: 'top',
            });
            this.router.navigate(['/auth/login'])
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
