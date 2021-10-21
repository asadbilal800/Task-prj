import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {InboxComponent} from './inbox/inbox.component';
import {ProfileSettingComponent} from './profile-setting/profile-setting.component';
import {DashboardComponent} from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TranslateModule} from "@ngx-translate/core";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {ChatModule} from "@progress/kendo-angular-conversational-ui";
import {SharedModule} from "../shared.module";


@NgModule({
  declarations: [
    InboxComponent,
    ProfileSettingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    TranslateModule,
    FlexModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    ChatModule,
    SharedModule
  ]
})
export class DashboardModule {
}
