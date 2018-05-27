import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent }      from './trends/trends.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { LiveTrafficComponent } from './live-traffic/live-traffic.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {firebase } from '@firebase/app';

const routes: Routes = [
  { path: '', redirectTo: '/livetraffic', pathMatch: 'full' },
  { path: 'livetraffic', component: LiveTrafficComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
