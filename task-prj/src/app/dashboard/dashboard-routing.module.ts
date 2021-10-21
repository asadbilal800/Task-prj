import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ProfileSettingComponent} from "./profile-setting/profile-setting.component";
import {InboxComponent} from "./inbox/inbox.component";

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'profile',
        component: ProfileSettingComponent
      },
      {
        path:'inbox/:id',
        component: InboxComponent
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
