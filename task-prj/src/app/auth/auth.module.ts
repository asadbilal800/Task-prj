import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexModule,
    MatInputModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
