import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ProfileSettingComponent} from "./profile-setting/profile-setting.component";
import {InboxComponent} from "./inbox/inbox.component";
import {StatsComponent} from "./stats/stats.component";

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'statistics'
      },
      {
        path: 'profile',
        component: ProfileSettingComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'statistics',
        component: StatsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
