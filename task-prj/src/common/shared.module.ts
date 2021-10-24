import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyMaterialModule} from "@ngx-formly/material";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ChatModule} from "@progress/kendo-angular-conversational-ui";
import {ChartsModule} from "@progress/kendo-angular-charts";


// the following function is for ngx translate module services.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// shared module modules are used in the whole project,so all the common modules
// are import here,so it can import later on in the other modules!

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: {lazyRender: true,},
      validationMessages: [
        {name: 'required', message: 'This field is required!'},
      ],
    }),
    FormlyMaterialModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    ChatModule,
    ChartsModule,


  ],
})
export class SharedModule {
}
