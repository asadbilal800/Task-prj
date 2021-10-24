import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Error404Component} from '../common/error404/error404.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule} from "../common/shared.module";
import {firebaseConfig} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AuthGuard} from "../common/Services/auth-guard.service";
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);}

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    FlexModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),


  ],
  bootstrap: [AppComponent],
  providers:[AuthGuard]

})
export class AppModule {
}
