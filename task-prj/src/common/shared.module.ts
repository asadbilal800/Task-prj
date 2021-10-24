import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyMaterialModule} from "@ngx-formly/material";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { HttpClientModule} from "@angular/common/http";
import {ChatModule} from "@progress/kendo-angular-conversational-ui";
import {ChartsModule} from "@progress/kendo-angular-charts";


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
    HttpClientModule,
    ChatModule,
    ChartsModule,


  ],
})
export class SharedModule {
}
