import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent }      from './trends/trends.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { LiveTrafficComponent } from './live-traffic/live-traffic.component';
import { TransitTrackerComponent } from './transit-tracker/transit-tracker.component';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {firebase } from '@firebase/app';

const routes: Routes = [
  { path: '', redirectTo: '/livetraffic', pathMatch: 'full' },
  { path: 'livetraffic', component: LiveTrafficComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'transit', component: TransitTrackerComponent },
  { path: 'schedule', component: GameScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
