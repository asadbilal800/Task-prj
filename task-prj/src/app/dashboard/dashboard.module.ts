import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


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
    MatIconModule
  ]
})
export class DashboardModule {
}
