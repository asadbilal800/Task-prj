import {FormsModule} from "@angular/forms";
import {async, TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {inject} from "@angular/core/testing";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {signupModel} from "../../../common/models/register.model";

// i wrote some normal testing for register components by checking
//their existence aswell as the core functionality

describe('Component: Register', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent
      ],
      imports: [
        FormsModule,
        MatSnackBarModule,
        AngularFireModule,
        AngularFireAuthModule
      ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: AngularFireAuth, useClass: AngularFireAuth},
        {provide: MatSnackBar, useClass: MatSnackBar}
      ]
    }).compileComponents();
  }));
  it('should create an instance', inject([AngularFireAuth,AngularFirestore,MatSnackBar,Router],
    (firestoreAuth: AngularFireAuth, firestore:AngularFirestore, snackbar:MatSnackBar,router: Router) => {
      let component = new RegisterComponent(firestoreAuth, firestore,snackbar, router);
      expect(component).toBeTruthy();
    }));


  describe('when a valid username and password,email are entered', () => {
    it('then the login route should be displayed', inject([AngularFireAuth,AngularFirestore,MatSnackBar,Router],
      (firestoreAuth: AngularFireAuth, firestore:AngularFirestore, snackbar:MatSnackBar,router: Router) => {
        let component = new RegisterComponent(firestoreAuth, firestore,snackbar, router);
        let model :signupModel = {username:'test',password:'123',uid:'12345',email:'testuser123@gmail.com'}
        component.register(model);
        expect(router.navigateByUrl).toHaveBeenCalled();
      }));
  });

  describe('when a invalid username and password,email are entered', () => {
    it('then the login route should not be displayed', inject([AngularFireAuth,AngularFirestore,MatSnackBar,Router],
      (firestoreAuth: AngularFireAuth, firestore:AngularFirestore, snackbar:MatSnackBar,router: Router) => {
        let component = new RegisterComponent(firestoreAuth, firestore,snackbar, router);
        let model :signupModel = {username:'test',password:'123',uid:'12345',email:'testuser123@gmail.com'}
        component.register(model);
        expect(router.navigateByUrl).not.toHaveBeenCalled();
      }));
  });

})
class RouterStub {
  navigateByUrl(url: string) { return url; }
}
