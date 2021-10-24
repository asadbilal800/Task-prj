import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from "../common/error404/error404.component";
import {AuthGuard} from "../common/Services/auth-guard.service";
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'error',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
