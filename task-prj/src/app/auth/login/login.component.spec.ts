import {FormsModule} from "@angular/forms";
import {async, TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {inject} from "@angular/core/testing";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonService} from "../../../common/Services/common.service";
import {AngularFireModule} from "@angular/fire/compat";
import {loginModel} from "../../../common/models/login.model";

// i wrote some normal testing for login  components by checking
//their existence aswell as the core functionality

describe('Component: Login', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        FormsModule,
        MatSnackBarModule,
        AngularFireModule,
        AngularFireAuthModule
      ],
      providers: [
        {provide: CommonService, useClass: CommonService},
        {provide: Router, useClass: RouterStub},
        {provide: AngularFireAuth, useClass: AngularFireAuth},
        {provide: MatSnackBar, useClass: MatSnackBar}
      ]
    }).compileComponents();
  }));
  it('should create an instance', inject([AngularFireAuth,Router,MatSnackBar,CommonService,],
    (firestoreAuth: AngularFireAuth, snackbar: MatSnackBar, router: Router, commonSrv: CommonService) => {
    let component = new LoginComponent(firestoreAuth, snackbar, router, commonSrv);
    expect(component).toBeTruthy();
  }));


  describe('when a valid username and password are entered', () => {
    it('then the dashboard route should be displayed', inject([AngularFireAuth,Router,MatSnackBar,CommonService,],
      (firestoreAuth: AngularFireAuth, snackbar: MatSnackBar, router: Router, commonSrv: CommonService) => {
      let component = new LoginComponent(firestoreAuth, snackbar, router, commonSrv);
      let model :loginModel = {username:'test',password:'123'}
      component.login(model);
      expect(router.navigateByUrl).toHaveBeenCalled();
    }));
  });

  describe('when a invalid username and password are entered', () => {
    it('then the dashboard route should be displayed', inject([AngularFireAuth,Router,MatSnackBar,CommonService,],
      (firestoreAuth: AngularFireAuth, snackbar: MatSnackBar, router: Router, commonSrv: CommonService) => {
        let component = new LoginComponent(firestoreAuth, snackbar, router, commonSrv);
        let model :loginModel = {username:'test',password:'123'}
        component.login(model);
        expect(router.navigateByUrl).not.toHaveBeenCalled();
      }));
  });

})
  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }
