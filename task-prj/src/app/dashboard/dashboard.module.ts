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
import {SharedModule} from "../../common/shared.module";
import {AuthGuard} from "../../common/Services/auth-guard.service";
import {MatCardModule} from "@angular/material/card";
import { StatsComponent } from './stats/stats.component';
import {ChartModule, SparklineModule} from "@progress/kendo-angular-charts";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import 'hammerjs';


@NgModule({
  declarations: [
    InboxComponent,
    ProfileSettingComponent,
    DashboardComponent,
    StatsComponent
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
        SharedModule,
        MatCardModule,
        ChartModule,
        SparklineModule,
        MatTableModule,
        MatSelectModule
    ],
  providers:[AuthGuard]
})
export class DashboardModule {
}
